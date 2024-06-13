document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('computerDiagram');
    const ctx = canvas.getContext('2d');

    canvas.width = 600;
    canvas.height = 400;

    ctx.fillStyle = '#e0e0e0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#333';
    ctx.fillRect(100, 50, 400, 300);

    ctx.fillStyle = '#fff';
    ctx.font = '16px Arial';
    ctx.fillText('CPU', 150, 100);
    ctx.fillText('RAM', 150, 150);
    ctx.fillText('Storage', 150, 200);
    ctx.fillText('Motherboard', 150, 250);
    ctx.fillText('PSU', 150, 300);

    const components = [
        { name: 'CPU', x: 150, y: 100 },
        { name: 'RAM', x: 150, y: 150 },
        { name: 'Storage', x: 150, y: 200 },
        { name: 'Motherboard', x: 150, y: 250 },
        { name: 'PSU', x: 150, y: 300 }
    ];

    components.forEach(component => {
        ctx.fillStyle = 'red';
        ctx.fillRect(component.x - 5, component.y - 15, ctx.measureText(component.name).width + 10, 20);
        ctx.fillStyle = '#fff';
        ctx.fillText(component.name, component.x, component.y);
    });

    canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        components.forEach(component => {
            if (
                x >= component.x - 5 && x <= component.x - 5 + ctx.measureText(component.name).width + 10 &&
                y >= component.y - 15 && y <= component.y + 5
            ) {
                alert(`You clicked on ${component.name}`);
            }
        });
    });
});