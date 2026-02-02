# Projective Measurement and Pauli Operators

Measurement is the process by which we extract information from a quantum system. Pauli operators are fundamental operators used to describe operations and measurements on qubits.

---

## 1. Projective Measurement
Measurement is performed in an orthonormal basis $\{|x_i\rangle\}$ of the Hilbert space. If the system is in state $|\psi\rangle = \sum_i c_i |x_i\rangle$, measurement causes the state to collapse to one of the basis vectors.

### 1.1 Born Rule
The probability of obtaining outcome $x_i$ is:
\[
P(x_i) = |\langle x_i|\psi\rangle|^2 = |c_i|^2
\]
The total probability sums to 1: $\sum_i P(x_i) = 1$.

After measurement with outcome $x_i$, the state becomes $|x_i\rangle$.

---

## 2. Pauli Operators
Pauli operators are both Hermitian and Unitary. Their eigenvalues are always $\pm 1$, and their eigenvectors form an orthonormal basis.

### 2.1 Pauli Z Operator ($\sigma_z$)
Identifies phase flips.
\[
\sigma_z = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} = |0\rangle\langle 0| - |1\rangle\langle 1|
\]
- **Eigenvalues**: $\lambda = \pm 1$
- **Eigenvectors**: $|0\rangle, |1\rangle$

### 2.2 Pauli X Operator ($\sigma_x$)
Performs a bit flip ($|0\rangle \leftrightarrow |1\rangle$).
\[
\sigma_x = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix} = |0\rangle\langle 1| + |1\rangle\langle 0|
\]
- **Eigenvalues**: $\lambda = \pm 1$
- **Eigenvectors**:
  - $|+\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$ for $\lambda = 1$
  - $|-\rangle = \frac{1}{\sqrt{2}}(|0\rangle - |1\rangle)$ for $\lambda = -1$

### 2.3 Pauli Y Operator ($\sigma_y$)
Performs a combined bit and phase flip.
\[
\sigma_y = \begin{bmatrix} 0 & -i \\ i & 0 \end{bmatrix} = -i|0\rangle\langle 1| + i|1\rangle\langle 0|
\]
- **Eigenvalues**: $\lambda = \pm 1$
- **Eigenvectors**:
  - $|+i\rangle = \frac{1}{\sqrt{2}}(|0\rangle + i|1\rangle)$ for $\lambda = 1$
  - $|-i\rangle = \frac{1}{\sqrt{2}}(|0\rangle - i|1\rangle)$ for $\lambda = -1$

---

## 3. Summary of Pauli Actions
| Gate | Main Action |
| :--- | :--- |
| **Pauli X** | Bit flip: $|0\rangle \leftrightarrow |1\rangle$ |
| **Pauli Y** | Bit + phase flip |
| **Pauli Z** | Phase flip: $|1\rangle \rightarrow -|1\rangle$ |

---

## 4. Global Phase
A global phase factor $e^{i\theta}$ does not change physical predictions.
\[
|\psi\rangle \sim e^{i\theta} |\psi\rangle
\]
Measurement probabilities and expectation values remain unchanged under global phase.
