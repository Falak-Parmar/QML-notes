# IT401 – Quantum Machine Learning  
## Math Prerequisites

This document summarizes the mathematical background required for Quantum Machine Learning.

---

## 1. Probability Theory

### 1.1 Relative Frequency Definition
The probability of an event is defined as the limit of its relative frequency over repeated trials:

\[
P(A) = \lim_{n \to \infty} \frac{n_A}{n}
\]

where:
- $n_A$ is the number of times event $A$ occurs
- $n$ is the total number of trials

---

### 1.2 Classical Definition
For a finite sample space with equally likely outcomes:

\[
P(A) = \frac{\text{Number of favorable outcomes}}{\text{Total number of possible outcomes}}
\]

---

### 1.3 Random Variable
A random variable is a function:

\[
X : \Omega \rightarrow \mathbb{R}
\]

It can be:
- Discrete
- Continuous

---

### 1.4 Expectation
The expectation (mean) of a random variable represents its average value.

**Discrete case:**
\[
E[X] = \sum_x x \, P(X = x)
\]

**Continuous case:**
\[
E[X] = \int_{-\infty}^{\infty} x f_X(x)\, dx
\]

**Interpretation:**
Expectation is a probability-weighted average and represents:
- Long-run average outcome
- Average loss or reward in machine learning
- Expected observable in quantum systems

---

## 2. Linear Algebra

### 2.1 Symmetric Matrix
A matrix $A$ is symmetric if:

\[
A = A^\top
\]

**Properties:**
- All eigenvalues are real
- Eigenvectors corresponding to distinct eigenvalues are orthogonal
- Always diagonalizable using an orthogonal matrix

---

### 2.2 Eigenvalues and Eigenvectors

**Procedure:**
1. Compute the characteristic equation:
   $$
   \det(A - \lambda I) = 0
   $$
2. Solve for eigenvalues \( \lambda \)
3. Solve:
   $$
   (A - \lambda I)v = 0
   $$
4. Normalize eigenvectors if required

**Important Properties:**
- Sum of eigenvalues:
  $$
  \sum_i \lambda_i = \text{tr}(A)
  $$
- Product of eigenvalues:
  $$
  \prod_i \lambda_i = \det(A)
  $$

#### Example: Eigenvalues and Eigenvectors of a Hermitian Matrix

Given the Hermitian matrix $A$:

$$
A = \begin{bmatrix} 2 & 1-i \\ 1+i & 3 \end{bmatrix}
$$

1. **Characteristic Equation**:
   $$
   \det(A - \lambda I) = (2-\lambda)(3-\lambda) - (1-i)(1+i) = \lambda^2 - 5\lambda + 4 = 0
   $$
2. **Eigenvalues**: $(\lambda-4)(\lambda-1) = 0 \implies \lambda_1 = 4, \lambda_2 = 1$.
3. **Eigenvectors**:
   - For $\lambda_1 = 4$: $v_1 = \begin{bmatrix} 1-i \\ 2 \end{bmatrix}$, Normalized: $\hat{v}_1 = \frac{1}{\sqrt{6}} \begin{bmatrix} 1-i \\ 2 \end{bmatrix}$
   - For $\lambda_2 = 1$: $v_2 = \begin{bmatrix} -(1-i) \\ 1 \end{bmatrix}$, Normalized: $\hat{v}_2 = \frac{1}{\sqrt{3}} \begin{bmatrix} i-1 \\ 1 \end{bmatrix}$

---

### 2.3 Covariance Matrix
For a random vector $X \in \mathbb{R}^d$:

$$
\Sigma = \text{Cov}(X) = E[(X - E[X])(X - E[X])^\top]
$$

**Properties:**
- Symmetric
- Positive semi-definite
- Diagonal entries → variances
- Off-diagonal entries → covariances

#### Example: Calculating Covariance Matrix
Consider a dataset with observations: $(1, 2, 1), (2, 3, 2), (3, 5, 4)$.
- **Means**: $\mu_X = 2, \mu_Y = 10/3, \mu_Z = 7/3$.
- **Covariance Matrix**:
  $$
  \Sigma = \begin{bmatrix} 2/3 & 1 & 1 \\ 1 & 14/9 & 14/9 \\ 1 & 14/9 & 14/9 \end{bmatrix}
  $$
  *(Calculated using $\Sigma = \frac{1}{n} X_c^\top X_c$ where $X_c$ is the centered data matrix)*.

---

### 2.4 Matrix Diagonalization

**Eigendecomposition:**
$$
A = Q \Lambda Q^{-1}
$$

**Singular Value Decomposition (SVD):**
$$
A = U \Sigma V^\top
$$

---

### 2.5 Types of Matrices

- **Hermitian Matrix**
  - $A = A^\dagger$
  - Real eigenvalues
  - Orthogonal eigenvectors

- **Unitary Matrix**
  - $U^\dagger U = I$
  - Eigenvalues lie on the unit circle

- **Orthogonal Matrix**
  - $Q^\top Q = I$
  - Preserves lengths and angles

- **Orthonormal Matrix**
  - Columns are unit vectors and mutually perpendicular

- **Rotation Matrix**
  $$
  R(\theta) =
  \begin{bmatrix}
  \cos \theta & -\sin \theta \\
  \sin \theta & \cos \theta
  \end{bmatrix}
  $$

#### Example: Eigenvalues of a Unitary Matrix
Given the Unitary matrix $A$:
$$
A = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 & i \\ i & 1 \end{bmatrix}
$$
The eigenvalues are $\lambda_{1,2} = \frac{1 \mp i}{\sqrt{2}} = e^{\mp i\pi/4}$, which lie on the unit circle ($|\lambda| = 1$).

---

### 2.6 Example: Hadamard Matrix
The Hadamard matrix is a real, orthogonal, and unitary matrix commonly used in quantum computing.
$$
H = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}
$$
It maps the computational basis states to superposition states:
- $H|0\rangle = |+\rangle$
- $H|1\rangle = |-\rangle$