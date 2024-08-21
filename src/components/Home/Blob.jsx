import React from 'react';

function Blob() {
  return (
    <div className=' blur-sm z-[-1]   relative flex justify-center -translate-y-[100%]  h-full w-full'>
      <div className=' absolute w-[50%] h-[50%]'>
        <svg
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          id="blobSvg"
        >
          <defs>
    
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(139, 198, 236, 0.89)' }} />
              <stop offset="100%" style={{ stopColor: 'rgba(149, 153, 226, 0.89)' }} />
            </linearGradient>

            <filter id="glassEffect">
              <feGaussianBlur stdDeviation="10" result="blurred" />
              <feTurbulence 
                type="fractalNoise" 
                baseFrequency="1" 
                numOctaves="3" 
                stitchTiles="stitch" 
                result="noise"
              />
              <feDisplacementMap 
                in="blurred" 
                in2="noise" 
                scale="30" 
                xChannelSelector="R" 
                yChannelSelector="G" 
              />
              <feGaussianBlur stdDeviation="3" result="finalBlur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.7" />
              </feComponentTransfer>
              <feBlend in="SourceGraphic" in2="finalBlur" mode="screen" />
            </filter>

            <filter id="neumorphismShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feOffset result="offOut" in="SourceAlpha" dx="8" dy="8" />
              <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
              <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>
          </defs>
          
          <path fill="url(#gradient)" filter="url(#glassEffect) url(#neumorphismShadow)">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                
                M416.5,296.5Q378,343,338,370.5Q298,398,236,440.5Q174,483,130.5,426Q87,369,44.5,309.5Q2,250,45,191.5Q88,133,144,115Q200,97,254,84Q308,71,341.5,115Q375,159,415,204.5Q455,250,416.5,296.5Z;

                M419,311.5Q419,373,367.5,413Q316,453,254.5,439Q193,425,153,387.5Q113,350,79,300Q45,250,50,179Q55,108,116.5,68.5Q178,29,242,53Q306,77,340.5,118Q375,159,397,204.5Q419,250,419,311.5Z;

                M425,302.5Q395,355,357.5,410.5Q320,466,256.5,446Q193,426,138.5,398.5Q84,371,62.5,310.5Q41,250,69.5,195Q98,140,138.5,86.5Q179,33,251.5,27Q324,21,354.5,86.5Q385,152,420,201Q455,250,425,302.5Z;

                M460.5,313.5Q425,377,369,411Q313,445,249.5,446Q186,447,150.5,397.5Q115,348,66,299Q17,250,64.5,200Q112,150,155,120Q198,90,248.5,94.5Q299,99,366,108Q433,117,464.5,183.5Q496,250,460.5,313.5Z;

                M416.5,296.5Q378,343,338,370.5Q298,398,236,440.5Q174,483,130.5,426Q87,369,44.5,309.5Q2,250,45,191.5Q88,133,144,115Q200,97,254,84Q308,71,341.5,115Q375,159,415,204.5Q455,250,416.5,296.5Z;
                
              "
            />
          </path>
        </svg>
      </div>
    </div>
  );
}

export default Blob;
