# Quantum Circuits and Basic Gates

A quantum circuit is a sequence of unitary operations (gates) applied to qubits, followed by measurements to extract information.

---

## 1. Quantum Circuit Representation
Quantum programs are represented as circuits where:
- **Horizontal lines** represent qubits.
- **Blocks** represent gates.
- **Time** flows from left to right.

Unlike classical circuits, all quantum gates (except measurement) must be **unitary** and **reversible**.

---

## 2. Single Qubit Gates
These gates act on a single qubit at a time.

### 2.1 Pauli Gates (X, Y, Z)
*(See [Pauli Operators](measurement_pauli.md) for detailed matrix forms)*
- **X Gate**: Bit flip ($|0\rangle \leftrightarrow |1\rangle$).
- **Y Gate**: Combined bit and phase flip.
- **Z Gate**: Phase flip ($|1\rangle \rightarrow -|1\rangle$).

### 2.2 Hadamard Gate ($H$)
The Hadamard gate is critical for creating superposition.

\[
H = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}
\]

**Action**:

- $H|0\rangle = |+\rangle = \frac{|0\rangle + |1\rangle}{\sqrt{2}}$
- $H|1\rangle = |-\rangle = \frac{|0\rangle - |1\rangle}{\sqrt{2}}$

### 2.3 Phase (S) Gate
Apply a phase of $i$ (90 degrees) to the $|1\rangle$ state.
\[
S = \begin{bmatrix} 1 & 0 \\ 0 & i \end{bmatrix}
\]

---

## 3. Multiple Qubit Gates
These gates perform operations on two or more qubits, enabling entanglement.

### 3.1 Controlled-NOT (CNOT) Gate
The CNOT gate has two inputs: a **control qubit** and a **target qubit**.
- If the control qubit is $|1\rangle$, it flips the target qubit.
- If the control qubit is $|0\rangle$, nothing happens.

**Matrix Form**:

\[
\text{CNOT} = \begin{bmatrix} 
1 & 0 & 0 & 0 \\ 
0 & 1 & 0 & 0 \\ 
0 & 0 & 0 & 1 \\ 
0 & 0 & 1 & 0 
\end{bmatrix}
\]

**State Mapping**:

- $|00\rangle \rightarrow |00\rangle$
- $|01\rangle \rightarrow |01\rangle$
- $|10\rangle \rightarrow |11\rangle$
- $|11\rangle \rightarrow |10\rangle$

---

## 4. Reversibility
Since all gates are unitary ($U^\dagger U = I$), they are inherently reversible. For example:
- $X \cdot X = I$
- $H \cdot H = I$
- $CNOT \cdot CNOT = I$
- $S^\dagger \cdot S = I$ (where $S^\dagger = T$)
