import React, { useEffect, useRef } from 'react';

const AntigravityParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Particle array
    const particles = [];
    const particleCount = 24; // Balanced for high performance and visual premium density

    // Mouse object
    const mouse = { x: null, y: null, radius: 150 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // 3D rotation functions
    const rotateX = (x, y, z, angle) => {
      const rad = (angle * Math.PI) / 180;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      return {
        x,
        y: y * cos - z * sin,
        z: y * sin + z * cos,
      };
    };

    const rotateY = (x, y, z, angle) => {
      const rad = (angle * Math.PI) / 180;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      return {
        x: x * cos + z * sin,
        y,
        z: -x * sin + z * cos,
      };
    };

    const rotateZ = (x, y, z, angle) => {
      const rad = (angle * Math.PI) / 180;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      return {
        x: x * cos - y * sin,
        y: x * sin + y * cos,
        z,
      };
    };

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + 50;
        this.z = Math.random() * 100 - 50;
        this.size = Math.random() * 10 + 5; // size of the tetrahedron
        this.speedY = -(Math.random() * 0.7 + 0.3); // float upwards (anti-gravity)
        this.speedX = Math.random() * 0.4 - 0.2;
        
        // Rotation angles
        this.rx = Math.random() * 360;
        this.ry = Math.random() * 360;
        this.rz = Math.random() * 360;
        
        // Rotation speeds
        this.vrx = Math.random() * 1.0 - 0.5;
        this.vry = Math.random() * 1.0 - 0.5;
        this.vrz = Math.random() * 1.0 - 0.5;

        // Colors tailored to match the website style (brand cyan/teal/dark teal)
        const colorSelect = Math.random();
        if (colorSelect > 0.6) {
          this.color = '0, 190, 173'; // brand cyan (#00bead)
        } else if (colorSelect > 0.3) {
          this.color = '2, 89, 89';   // brand dark green/teal (#025959)
        } else {
          this.color = '0, 122, 117'; // intermediate deep teal
        }
        this.alpha = Math.random() * 0.35 + 0.25; // higher visibility to stand out beautiful
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;

        // Slow rotation
        this.rx += this.vrx;
        this.ry += this.vry;
        this.rz += this.vrz;

        // Mild mouse gravity pull/push
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            // Float faster or be pulled slightly
            this.x += dx * force * 0.03;
            this.y += dy * force * 0.03;
          }
        }

        // If moves past top, reset to bottom
        if (this.y < -50 || this.x < -50 || this.x > width + 50) {
          this.reset(false);
        }
      }

      draw() {
        const s = this.size;
        
        // Local coordinates of regular tetrahedron vertices
        const rawVertices = [
          { x: 0, y: -s, z: 0 },
          { x: s * 0.94, y: s * 0.33, z: -s * 0.54 },
          { x: -s * 0.47, y: s * 0.33, z: s * 0.81 },
          { x: -s * 0.47, y: s * 0.33, z: -s * 0.81 }
        ];

        // Rotate and project vertices to 2D screen coordinate space
        const projected = rawVertices.map(v => {
          let rot = rotateX(v.x, v.y, v.z, this.rx);
          rot = rotateY(rot.x, rot.y, rot.z, this.ry);
          rot = rotateZ(rot.x, rot.y, rot.z, this.rz);
          
          return {
            x: this.x + rot.x,
            y: this.y + rot.y
          };
        });

        // The four faces of a tetrahedron (connected vertices indices)
        const faces = [
          [0, 1, 2],
          [0, 2, 3],
          [0, 3, 1],
          [1, 3, 2]
        ];

        // Draw each face with wireframe outline and semi-transparent fill
        faces.forEach((face, index) => {
          const p0 = projected[face[0]];
          const p1 = projected[face[1]];
          const p2 = projected[face[2]];

          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.lineTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.closePath();

          // Apply slight shading for 3D look
          const shade = 0.85 + index * 0.05; 
          ctx.fillStyle = `rgba(${this.color}, ${this.alpha * shade * 0.35})`;
          ctx.fill();

          ctx.strokeStyle = `rgba(${this.color}, ${this.alpha * 0.9})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        });
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Draw connections between close particles for a network/holographic look
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = (120 - dist) / 120 * 0.18; // higher visibility
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 190, 173, ${alpha})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
};

export default AntigravityParticles;
