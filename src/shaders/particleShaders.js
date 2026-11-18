export const particleVertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uTurbulence;
  uniform vec2 uMouse;

  attribute float aScale;
  attribute float aPhase;
  attribute vec3 aColor;

  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec3 pos = position;

    // Gentle orbital wave motion
    float wave = sin(uTime * 0.55 + aPhase + pos.x * 0.35) * uTurbulence;
    float waveY = cos(uTime * 0.45 + aPhase * 1.3 + pos.z * 0.35) * uTurbulence;
    pos.y += wave * 0.45;
    pos.x += waveY * 0.3;

    // Subtle interactive pointer parallax
    pos.x += uMouse.x * 0.45 * (0.5 + fract(aPhase));
    pos.y += uMouse.y * 0.35 * (0.5 + fract(aPhase));

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    float dist = max(-mvPosition.z, 1.0);
    gl_PointSize = clamp(aScale * uPixelRatio * (52.0 / dist), 1.5, 22.0);

    vColor = aColor;
    vAlpha = smoothstep(32.0, 4.0, dist) * (0.55 + 0.35 * sin(uTime * 1.4 + aPhase));
  }
`;

export const particleFragmentShader = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec2 center = gl_PointCoord - vec2(0.5);
    float d = length(center);
    if (d > 0.5) discard;

    float glow = pow(1.0 - d * 2.0, 2.2);
    gl_FragColor = vec4(vColor, glow * vAlpha);
  }
`;
