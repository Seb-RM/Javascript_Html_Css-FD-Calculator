# 📈 Fixed Deposit Calculator (Calculadora de Plazo Fijo)

¡Bienvenido a la Fixed Deposit Calculator! 🎉 Esta aplicación web te permite calcular el rendimiento de un depósito a plazo fijo, mostrando el monto invertido, el interés ganado y el valor total al final del período. Es una herramienta útil para planificar inversiones y entender cómo crece tu dinero con el tiempo. 💰

## 🚀 Características

- **Interfaz intuitiva**: Diseño moderno y fácil de usar. 🎨
- **Cálculos precisos**: Utiliza fórmulas de interés compuesto para calcular el rendimiento. 🧮
- **Personalización**: Ajusta el monto invertido, la tasa de interés y el período de tiempo con controles deslizantes. 🎚️
- **Resultados claros**: Muestra el monto invertido, el interés ganado y el valor total de manera detallada. 📊
- **Diseño responsive**: Funciona perfectamente en dispositivos móviles y de escritorio. 📱💻

## 🛠️ Tecnologías Utilizadas

- **HTML**: Estructura de la aplicación. 🏗️
- **CSS**: Estilos y animaciones para una experiencia visual atractiva. 🎨
- **JavaScript**: Lógica de cálculo y manipulación del DOM. 🧩
- **Google Fonts**: Fuentes modernas para mejorar la legibilidad. ✒️
- **Gradientes y animaciones CSS**: Efectos visuales dinámicos. 🌈

## 🧩 Funcionamiento

### 1. Interfaz de Usuario

La aplicación consta de tres controles deslizantes (`input type="range"`) para ajustar:

- **Monto invertido**: Desde 10,000 hasta 10,000,000.
- **Tasa de interés**: Desde 1% hasta 15%.
- **Período de tiempo**: Desde 1 hasta 20 años.

Cada control deslizante actualiza dinámicamente su valor mostrado en pantalla.

### 2. Cálculos

Al hacer clic en el botón "INVEST NOW", la aplicación calcula:

- **Interés ganado**: Utilizando la fórmula de interés compuesto.
- **Valor total**: Sumando el monto invertido y el interés ganado.

### 3. Resultados

Los resultados se muestran en tres líneas:

- **Monto invertido**: El capital inicial.
- **Interés ganado**: El rendimiento generado.
- **Valor total**: El monto final después del período de inversión.


## 🧑‍💻 Fragmentos de Código Destacados

### 1. Actualización Dinámica de Valores

Cuando el usuario mueve los controles deslizantes, los valores mostrados se actualizan en tiempo real gracias a la manipulación del DOM.

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const investmentInput = document.getElementById("investment");
    investmentInput.addEventListener('input', function() {
        updateInvestmentValue(this.value);
    });
});

function updateInvestmentValue(value) {
    document.getElementById('investment-value').innerText = `${parseFloat(value).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}`;
}
```

### 2. Cálculo del Interés Compuesto
La función *calculateFD()* realiza los cálculos utilizando la fórmula de interés compuesto:

```javascript
function calculateFD() {
    const principal = parseFloat(document.getElementById('investment').value);
    const rate = parseFloat(document.getElementById('interest-rate').value) / 100;
    const time = parseFloat(document.getElementById('time-period').value);

    const compoundInterest = principal * (Math.pow((1 + rate), time) - 1);
    const result = principal + compoundInterest;
    const interestEarned = result - principal;

    document.getElementById('invested-amount').innerText = `${principal.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}`;
    document.getElementById('estimated-returns').innerText = `${Math.round(interestEarned).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}`;
    document.getElementById('total-value').innerText = `${Math.round(result).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}`;
}
```

### 3. Estilos y Animaciones
El diseño utiliza gradientes y animaciones CSS para crear una experiencia visual atractiva:

```css
.calculator {
    background: linear-gradient(120deg, #f56456, #f5576c);
    border-radius: 10px;
    animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
```

## 📖 Cómo Usar la Aplicación

1. Ajusta los controles deslizantes:
    - Selecciona el monto que deseas invertir.
    - Define la tasa de interés anual.
    - Establece el período de tiempo en años.

2. Haz clic en "INVEST NOW":
    - La aplicación calculará automáticamente el interés ganado y el valor total.

3. Revisa los resultados:
    - El monto invertido, el interés ganado y el valor total se mostrarán en la sección de resultados.

## 🧩 Conceptos Aplicados

### 1. Manipulación del DOM

Se utilizan métodos como `getElementById` y `addEventListener` para interactuar con los elementos HTML y actualizar dinámicamente los valores mostrados.

### 2. Fórmula de Interés Compuesto

La fórmula `P * (Math.pow((1 + r), t) - 1)` se utiliza para calcular el interés compuesto, donde:
- `P` = Monto principal.
- `r` = Tasa de interés.
- `t` = Período de tiempo.

### 3. Formato de Moneda

Se usa `toLocaleString()` para formatear los montos como pesos argentinos (ARS), lo que mejora la legibilidad para el usuario.

## 🛠️ Instalación y Desarrollo

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/fixed-deposit-calculator.git
```

2. Abre el proyecto en tu editor de código favorito.

3. Ejecuta el archivo index.html en tu navegador.

¡Listo! Puedes probar y modificar la aplicación según tus necesidades.