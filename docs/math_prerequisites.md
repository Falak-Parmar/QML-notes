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
- \( n_A \) is the number of times event \( A \) occurs
- \( n \) is the total number of trials

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
A matrix \( A \) is symmetric if:

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
   \[
   \det(A - \lambda I) = 0
   \]
2. Solve for eigenvalues \( \lambda \)
3. Solve:
   \[
   (A - \lambda I)v = 0
   \]
4. Normalize eigenvectors if required

**Important Properties:**
- Sum of eigenvalues:
  \[
  \sum_i \lambda_i = \text{tr}(A)
  \]
- Product of eigenvalues:
  \[
  \prod_i \lambda_i = \det(A)
  \]

---

### 2.3 Covariance Matrix
For a random vector \( X \in \mathbb{R}^d \):

\[
\Sigma = \text{Cov}(X) = E[(X - E[X])(X - E[X])^\top]
\]

**Properties:**
- Symmetric
- Positive semi-definite
- Diagonal entries → variances
- Off-diagonal entries → covariances

---

### 2.4 Matrix Diagonalization

**Eigendecomposition:**
\[
A = Q \Lambda Q^{-1}
\]

**Singular Value Decomposition (SVD):**
\[
A = U \Sigma V^\top
\]

---

### 2.5 Types of Matrices

- **Hermitian Matrix**
  - \( A = A^\dagger \)
  - Real eigenvalues
  - Orthogonal eigenvectors

- **Unitary Matrix**
  - \( U^\dagger U = I \)
  - Eigenvalues lie on the unit circle

- **Orthogonal Matrix**
  - \( Q^\top Q = I \)
  - Preserves lengths and angles

- **Orthonormal Matrix**
  - Columns are unit vectors and mutually perpendicular

- **Rotation Matrix**
  \[
  R(\theta) =
  \begin{bmatrix}
  \cos \theta & -\sin \theta \\
  \sin \theta & \cos \theta
  \end{bmatrix}
  \]

---

### 2.6 Example: Hadamard Matrix
The Hadamard matrix is a real, orthogonal, and unitary matrix commonly used in quantum computing.