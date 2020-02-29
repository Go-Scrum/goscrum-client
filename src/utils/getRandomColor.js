export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    let i = 0;
    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
