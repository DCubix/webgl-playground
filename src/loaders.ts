export function loadImage(url: string): Promise<ImageData> {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            const context = canvas.getContext('2d')!;
            context.drawImage(image, 0, 0);
            resolve(context.getImageData(0, 0, image.width, image.height));
        };
        image.onerror = () => reject(new Error(`Could not load image: ${url}`));
        image.src = url;
    });
}