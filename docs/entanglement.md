# Quantum Entanglement

Entanglement is a purely quantum phenomenon where the states of two or more particles are linked such that the state of one cannot be described independently of the others, even when separated by large distances.

---

## 1. Bell States
The Bell states (or EPR pairs) are four specific maximally entangled two-qubit states.

### 1.1 The Four Bell States

\[
|\Phi^+\rangle = \frac{|00\rangle + |11\rangle}{\sqrt{2}}, \quad |\Phi^-\rangle = \frac{|00\rangle - |11\rangle}{\sqrt{2}}
\]

\[
|\Psi^+\rangle = \frac{|01\rangle + |10\rangle}{\sqrt{2}}, \quad |\Psi^-\rangle = \frac{|01\rangle - |10\rangle}{\sqrt{2}}
\]

---

## 2. Entanglement vs Independence

A two-qubit state $|\psi\rangle$ is **separable** (not entangled) if it can be written as a tensor product of two single-qubit states:

\[
|\psi\rangle = |\psi_1\rangle \otimes |\psi_2\rangle
\]

If a state cannot be written this way, it is **entangled**.

---

## 3. Creating a Bell State
A Bell state can be created using a combination of a Hadamard gate and a CNOT gate.

1. Start with $|00\rangle$.
2. Apply $H$ to the first qubit:
   $|00\rangle \rightarrow \frac{|0\rangle + |1\rangle}{\sqrt{2}} \otimes |0\rangle = \frac{|00\rangle + |10\rangle}{\sqrt{2}}$
3. Apply $CNOT$ with the first qubit as control and second as target:
   $\frac{|00\rangle + |10\rangle}{\sqrt{2}} \xrightarrow{\text{CNOT}} \frac{|00\rangle + |11\rangle}{\sqrt{2}} = |\Phi^+\rangle$

### 3.1 Circuit Diagram (ASCII)
```text
q0: ──H───●──
          │
q1: ──────X──
```

---

## 4. Significance in QML
Entanglement is a resource that allows quantum models to capture complex correlations between features that would be difficult for classical models to represent efficiently. It contributes to the **expressibility** of Variational Quantum Circuits (VQCs).
