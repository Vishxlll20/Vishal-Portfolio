export const coreVertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uDistortion;
  uniform float uPulse;
  uniform vec2 uMouse;

  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vWorldPos;
  varying float vNoise;

  // Compact 3D Simplex Noise (Ashima Arts)
  vec4 permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 1.0 / 7.0;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }

  void main() {
    float slowTime = uTime * 0.45;
    vec3 noiseCoord = position * 1.35 + vec3(slowTime, slowTime * 0.7, -slowTime * 0.5);
    float n1 = snoise(noiseCoord);
    float n2 = snoise(position * 2.8 - vec3(uTime * 0.65));
    float combinedNoise = n1 * 0.7 + n2 * 0.3;

    // Subtle pointer influence on displacement
    float mouseInfluence = 1.0 + 0.18 * (uMouse.x * position.x + uMouse.y * position.y);
    float disp = combinedNoise * (uDistortion + uPulse * 0.35) * mouseInfluence;

    vec3 displaced = position + normal * disp;

    vNoise = combinedNoise;
    vPosition = displaced;
    vNormal = normalize(mat3(modelMatrix) * normal);

    vec4 worldPosition = modelMatrix * vec4(displaced, 1.0);
    vWorldPos = worldPosition.xyz;

    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

export const coreFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform float uPulse;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uRimColor;

  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vWorldPos;
  varying float vNoise;

  void main() {
    vec3 viewDir = normalize(cameraPosition - vWorldPos);
    vec3 normal = normalize(vNormal);

    float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 2.6);

    float blend = smoothstep(-0.6, 0.6, vNoise);
    vec3 baseColor = mix(vec3(0.03, 0.04, 0.07), uColorA * 0.45, blend);
    baseColor = mix(baseColor, uColorB * 0.75, smoothstep(0.15, 0.85, vNoise));

    // Iridescent specular ridge
    float ridge = smoothstep(0.32, 0.72, abs(vNoise));
    vec3 finalColor = baseColor + uRimColor * fresnel * (1.35 + uPulse * 0.8);
    finalColor += uColorB * ridge * 0.25;

    // Subtle scanline micro-detail
    float scan = 0.96 + 0.04 * sin(vWorldPos.y * 28.0 - uTime * 3.0);
    finalColor *= scan;

    gl_FragColor = vec4(finalColor, 0.96);
  }
`;
