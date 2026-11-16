export const holoVertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uHover;
  uniform float uFocus;

  varying vec2 vUv;
  varying float vElevation;

  void main() {
    vUv = uv;
    vec3 pos = position;

    float waveFreq = 3.2;
    float waveAmp = 0.045 + uHover * 0.08;
    float wave = sin(pos.x * waveFreq + uTime * 2.4) * cos(pos.y * 2.5 + uTime * 1.8) * waveAmp;
    pos.z += wave;
    pos.z += uFocus * 0.25;

    vElevation = wave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

export const holoFragmentShader = /* glsl */ `
  uniform sampler2D uTexture;
  uniform float uTime;
  uniform float uHover;
  uniform float uFocus;
  uniform vec3 uAccent;

  varying vec2 vUv;
  varying float vElevation;

  void main() {
    float shift = (0.002 + uHover * 0.008) * (0.5 + 0.5 * sin(uTime * 4.0));

    float r = texture2D(uTexture, vUv + vec2(shift, 0.0)).r;
    float g = texture2D(uTexture, vUv).g;
    float b = texture2D(uTexture, vUv - vec2(shift, 0.0)).b;

    vec3 texColor = vec3(r, g, b);

    // Subtle holographic border glow
    float edgeX = min(vUv.x, 1.0 - vUv.x);
    float edgeY = min(vUv.y, 1.0 - vUv.y);
    float border = 1.0 - smoothstep(0.0, 0.025, min(edgeX, edgeY));

    float scanline = 0.96 + 0.04 * sin(vUv.y * 180.0 - uTime * 5.0);
    vec3 color = texColor * scanline;
    color += uAccent * border * (0.45 + uHover * 0.65);
    color += vec3(0.08) * vElevation * 4.0;

    float alpha = mix(0.72, 0.98, max(uHover, uFocus));
    gl_FragColor = vec4(color, alpha);
  }
`;
