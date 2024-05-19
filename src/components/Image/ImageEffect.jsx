import React, { useEffect } from 'react';

const Effect = () =>{
  useEffect(() => {
    const tiltEls = document.querySelectorAll('.tilt');

    const tiltMove = (x, y) => 
      `perspective(500px) scale(1.1) rotateX(${x}deg) rotateY(${y}deg)`;

    tiltEls.forEach(tilt => {
      const height = tilt.clientHeight;
      const width = tilt.clientWidth;

      const handleMouseMove = (e) => {
        const x = e.layerX;
        const y = e.layerY;
        const multiplier = 50;
        const xRotate = multiplier * ((x - width / 2) / width);
        const yRotate = multiplier * ((y - height / 2) / height);
        tilt.style.transform = tiltMove(yRotate,xRotate );
      };

      const handleMouseOut = () => {
        tilt.style.transform = tiltMove(0, 0);
      };

      tilt.addEventListener('mousemove', handleMouseMove);
      tilt.addEventListener('mouseout', handleMouseOut);

      // Clean up event listeners on component unmount
      return () => {
        tilt.removeEventListener('mousemove', handleMouseMove);
        tilt.removeEventListener('mouseout', handleMouseOut);
      };
    });
  }, []);

  return (
    <div class='body1'>
      <div className='flex  mt-2'>
      <h1 className='m-auto text-center text-3xl font-bold text-gray-500'>hover mouse over image to see effect</h1>
      <button className=" m-auto ml-3 bg-black text-white hover:bg-gray-700 py-2 px-4 rounded-full" onClick={()=>{window.location.href='/home' }}>Home</button>
       
    </div><div className="tilt">
      <div className="tilt_content">
        <img className='h-3/4'
          src="https://imgs.search.brave.com/ddOc8KbzsJzDFFx2L-mHihXTUpjjfbEoAUWRBv5rWKw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZ2xvYmFsLndl/YnNpdGUtZmlsZXMu/Y29tLzYzODk0ZjBl/MjUxZTU2MjhhNDQ0/M2JjZC82NTdjZWYw/MDYyNzZlYThiZDFk/ZDdjMWZfT25seSUy/MCYlMjBTb25zLndl/YnA"
          alt="Loading..."
        />
      </div>
      </div>
    </div>
  );
};

export default Effect;
