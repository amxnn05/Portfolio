import { useEffect, useRef } from "react";

export default function MouseTrail() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let clicks: { x: number; y: number; age: number }[] = [];
		let animationFrameId: number;

		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		window.addEventListener("resize", resize);
		resize();

		const addClick = (e: MouseEvent) => {
			clicks.push({ x: e.clientX, y: e.clientY, age: 0 });
		};

		window.addEventListener("mousedown", addClick);

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			clicks.forEach((c) => (c.age += 1));
			
			const maxClickAge = 20;
			clicks = clicks.filter((c) => c.age < maxClickAge);

			const isDark = document.documentElement.classList.contains("dark");
			const rgb = isDark ? "255, 255, 255" : "0, 0, 0";

			// Draw click sparks
			clicks.forEach((c) => {
				const opacity = Math.max(0, 1 - c.age / maxClickAge);
				// Full opacity at the start
				ctx.strokeStyle = `rgba(${rgb}, ${opacity})`;
				ctx.lineWidth = 2;
				ctx.lineCap = "round";

				const numSparks = 4;
				for (let i = 0; i < numSparks; i++) {
					// Offset slightly to align with the pointer but rotated a bit more to the right
					const angle = Math.PI - Math.PI / 8 + (Math.PI / 5) * (i + 1);
					
					const distance = 8 + c.age * 0.8; 
					const length = 5;
					
					const startX = c.x + Math.cos(angle) * distance;
					const startY = c.y + Math.sin(angle) * distance;
					const endX = c.x + Math.cos(angle) * (distance + length);
					const endY = c.y + Math.sin(angle) * (distance + length);

					ctx.beginPath();
					ctx.moveTo(startX, startY);
					ctx.lineTo(endX, endY);
					ctx.stroke();
				}
			});

			animationFrameId = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener("resize", resize);
			window.removeEventListener("mousedown", addClick);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="pointer-events-none fixed inset-0 z-50"
		/>
	);
}
