# Bloch Sphere Representation

The Bloch Sphere is a geometric representation of the state space of a single qubit. Every pure state of a qubit corresponds to a point on the surface of the sphere.

---

## 1. Geometric Representation
Any single-qubit pure state $|\psi\rangle$ can be written as:

\[
|\psi\rangle = \cos\left(\frac{\theta}{2}\right)|0\rangle + e^{i\phi}\sin\left(\frac{\theta}{2}\right)|1\rangle
\]
where:
- $0 \le \theta \le \pi$ is the polar angle (angle with the Z-axis).
- $0 \le \phi < 2\pi$ is the azimuthal angle (angle with the X-axis).

!!! tip "Coordinate Mapping"
    Note that while the qubit state is a vector in 2-dimensional complex Hilbert space $\mathbb{C}^2$, the Bloch Sphere is a representation in 3-dimensional real space $\mathbb{R}^3$. The factor of $\theta/2$ in the state vector $|\psi\rangle$ is crucial because a full rotation of $2\pi$ around the Bloch Sphere corresponds to a change in the state vector by a factor of $-1$ (a phase of $\pi$).

### 1.1 Bloch Vector
The coordinates of the state on the Bloch sphere are given by the vector $\vec{r}$:
\[
\vec{r} = \begin{bmatrix} \sin\theta \cos\phi \\ \sin\theta \sin\phi \\ \cos\theta \end{bmatrix}
\]
- For **pure states**, $|\vec{r}| = 1$ (point on the surface).
- For **mixed states**, $|\vec{r}| < 1$ (point inside the sphere).

---

## 2. Visualization

<div style="text-align: center;">
<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Sphere background -->
  <circle cx="200" cy="200" r="150" fill="none" stroke="#60a5fa" stroke-width="1" stroke-dasharray="5,5" opacity="0.5"/>
  <ellipse cx="200" cy="200" rx="150" ry="40" fill="none" stroke="#60a5fa" stroke-width="1" stroke-dasharray="5,5" opacity="0.5"/>
  <ellipse cx="200" cy="200" rx="40" ry="150" fill="none" stroke="#60a5fa" stroke-width="1" stroke-dasharray="5,5" opacity="0.5"/>
  
  <!-- Axes -->
  <!-- Z-axis -->
  <line x1="200" y1="50" x2="200" y2="350" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrowhead)"/>
  <text x="210" y="45" fill="#94a3b8" font-size="14" font-weight="bold">|0&gt; (Z+)</text>
  <text x="210" y="365" fill="#94a3b8" font-size="14" font-weight="bold">|1&gt; (Z-)</text>
  
  <!-- X-axis -->
  <line x1="100" y1="270" x2="300" y2="130" stroke="#94a3b8" stroke-width="2"/>
  <text x="80" y="290" fill="#94a3b8" font-size="14" font-weight="bold">|+&gt; (X+)</text>
  <text x="310" y="125" fill="#94a3b8" font-size="14" font-weight="bold">|−&gt; (X-)</text>
  
  <!-- Y-axis -->
  <line x1="50" y1="200" x2="350" y2="200" stroke="#94a3b8" stroke-width="2"/>
  <text x="30" y="215" fill="#94a3b8" font-size="14" font-weight="bold">|+i&gt; (Y+)</text>
  <text x="340" y="215" fill="#94a3b8" font-size="14" font-weight="bold">|−i&gt; (Y-)</text>

  <!-- State vector example -->
  <line x1="200" y1="200" x2="270" y2="100" stroke="#ef4444" stroke-width="3" marker-end="url(#redarrow)"/>
  <text x="280" y="90" fill="#ef4444" font-size="16" font-weight="bold">|&psi;&gt;</text>
  
  <!-- Angles labels -->
  <path d="M 200 150 A 50 50 0 0 1 228 160" fill="none" stroke="#ef4444" stroke-width="1.5"/>
  <text x="215" y="145" fill="#ef4444" font-size="12">&theta;</text>
  <path d="M 230 200 A 30 30 0 0 1 245 220" fill="none" stroke="#ef4444" stroke-width="1.5"/>
  <text x="250" y="215" fill="#ef4444" font-size="12">&phi;</text>

  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
    </marker>
    <marker id="redarrow" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
    </marker>
  </defs>
</svg>
</div>

---

## 3. Axis Correspondence
The standard measurement bases map to the principal axes of the sphere:

| Axis | Basis States | Notation |
| :---: | :--- | :--- |
| **Z** | $\{|0\rangle, |1\rangle\}$ | Computational Basis |
| **X** | $\{|+\rangle, |-\rangle\}$ | Superposition Basis |
| **Y** | $\{|+i\rangle, |-i\rangle\}$ | Circular Basis |

### 3.1 Probability Interpretation
The polar angle $\theta$ determines the probability of measuring $|0\rangle$ or $|1\rangle$:
- $P(0) = \cos^2\left(\frac{\theta}{2}\right)$
- $P(1) = \sin^2\left(\frac{\theta}{2}\right)$

The azimuthal angle $\phi$ represents the **relative phase** between $|0\rangle$ and $|1\rangle$.

---

## 4. Rotations on the Bloch Sphere
Single-qubit unitary operations can be viewed as rotations of the Bloch vector around various axes.

### 4.1 Rotation Gates
- **$R_z(\lambda)$**: Rotation around the Z-axis. This changes the azimuthal angle $\phi$ but keeps the probability (polar angle $\theta$) constant.
- **$R_x(\theta)$**: Rotation around the X-axis.
- **$R_y(\theta)$**: Rotation around the Y-axis.

!!! note "Unitary Matrices"
    Any single-qubit unitary $U$ can be decomposed into rotations:
    \[
    U = e^{i\alpha} R_z(\beta) R_y(\gamma) R_z(\delta)
    \]
    This means all single-qubit operations can be visualized as a sequence of movements on the surface of the Bloch Sphere.
