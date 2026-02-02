# Quantum Computing Fundamentals

This section covers the basic building blocks of quantum information and the mathematical framework used to describe quantum systems.

---

## 1. Tensors
A tensor is a mathematical object that generalizes scalars (order 0), vectors (order 1), and matrices (order 2) to higher dimensions.

### 1.1 Tensor Product
The tensor product combines two vectors or matrices to form a higher-dimensional object, used to describe joint quantum systems.

For matrices $A$ and $B$:
\[
A = \begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix}, \quad B = \begin{bmatrix} b_{11} & b_{12} \\ b_{21} & b_{22} \end{bmatrix}
\]
The tensor (Kronecker) product is:
\[
A \otimes B = \begin{bmatrix} a_{11}B & a_{12}B \\ a_{21}B & a_{22}B \end{bmatrix} 
\]
\[
= \begin{bmatrix} 
a_{11}b_{11} & a_{11}b_{12} & a_{12}b_{11} & a_{12}b_{12} \\ 
a_{11}b_{21} & a_{11}b_{22} & a_{12}b_{21} & a_{12}b_{22} \\ 
a_{21}b_{11} & a_{21}b_{12} & a_{22}b_{11} & a_{22}b_{12} \\ 
a_{21}b_{21} & a_{21}b_{22} & a_{22}b_{21} & a_{22}b_{22} 
\end{bmatrix}
\]

---

## 2. Hilbert Space
A Hilbert space is a complete vector space with an inner product. Quantum states are represented as normalized vectors in a complex Hilbert space $\mathcal{H} = \mathbb{C}^n$.

---

## 3. Qubit
A qubit is the basic unit of quantum information. Its state is a unit vector in $\mathbb{C}^2$:
\[
|\psi\rangle = \alpha|0\rangle + \beta|1\rangle
\]
where $\alpha, \beta \in \mathbb{C}$ are probability amplitudes.

### 3.1 Normalization Condition
The total probability must be one:
\[
|\alpha|^2 + |\beta|^2 = 1 \implies \langle\psi|\psi\rangle = 1
\]
This ensures the state vector has unit length.

---

## 4. Dirac Notation
Quantum states and operators are written using **bra-ket** notation:
- **Ket** $|\psi\rangle$: Represents the state vector in Hilbert space (column vector).
- **Bra** $\langle\psi|$: Represents the dual (conjugate transpose) of the ket (row vector).

### 4.1 Inner Product (Bra-Ket)
\[
\langle\phi|\psi\rangle = \text{scalar complex number}
\]
Represents the overlap or probability amplitude between two states.

### 4.2 Outer Product (Ket-Bra)
\[
|\psi\rangle\langle\phi| = \text{linear operator (matrix)}
\]

#### Example: Bra-Ket and Ket-Bra
Let $|a\rangle = \begin{bmatrix} a_0 \\ a_1 \end{bmatrix}$ and $|b\rangle = \begin{bmatrix} b_0 \\ b_1 \end{bmatrix}$.
- **Inner Product**: $\langle a|b\rangle = a_0^* b_0 + a_1^* b_1$
- **Outer Product**: $|a\rangle\langle b| = \begin{bmatrix} a_0 b_0^* & a_0 b_1^* \\ a_1 b_0^* & a_1 b_1^* \end{bmatrix}$

---

## 5. Computational Basis
The standard basis for a single qubit is:
\[
|0\rangle = \begin{bmatrix} 1 \\ 0 \end{bmatrix}, \quad |1\rangle = \begin{bmatrix} 0 \\ 1 \end{bmatrix}
\]
For two qubits, the basis is: $\{|00\rangle, |01\rangle, |10\rangle, |11\rangle\}$.

---

## 6. Density Matrix
The density matrix $\rho$ represents the state of a quantum system.
\[
\rho = \sum_k p_k |\psi_k\rangle\langle\psi_k|, \quad \sum_k p_k = 1
\]
where $p_k$ are classical probabilities of the system being in state $|\psi_k\rangle$.

### 6.1 Pure vs Mixed States
- **Pure State**: $\rho = |\psi\rangle\langle\psi|$. Characterized by $tr(\rho^2) = 1$.
- **Mixed State**: A statistical ensemble of pure states. Characterized by $tr(\rho^2) < 1$.

### 6.2 Properties
- **Hermitian**: $\rho = \rho^\dagger$
- **Positive Semidefinite**: $\langle\psi|\rho|\psi\rangle \geq 0$
- **Unit Trace**: $tr(\rho) = 1$
