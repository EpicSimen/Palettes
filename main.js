function getColor(element) {
    return element.getAttribute('data-color');
}

function main() {
    let elements = document.getElementsByClassName('colorSquare');
    for (let i = 0; i < elements.length; i++) {
        let square = elements[i];
        let [label] = square.children;
        const color = getColor(elements[i]);

        square.style.backgroundColor = `#${color}`;
        label.innerHTML = `#${color}`;
    }
}

function singleCopy(element) {
    navigator.clipboard.writeText(`#${getColor(element)}`);
}