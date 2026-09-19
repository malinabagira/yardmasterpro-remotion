import React from 'react';
import {AbsoluteFill, Sequence, Video, staticFile, useCurrentFrame, interpolate} from 'remotion';

const Caption: React.FC<{title:string; subtitle?:string; top?:boolean}> = ({title, subtitle, top=false}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame,[0,8],[0,1],{extrapolateRight:'clamp'});
  const y = interpolate(frame,[0,10],[24,0],{extrapolateRight:'clamp'});
  return (
    <AbsoluteFill style={{justifyContent: top ? 'flex-start':'flex-end', padding: top ? '130px 70px':'0 70px 190px', pointerEvents:'none'}}>
      <div style={{opacity, transform:`translateY(${y}px)`, maxWidth:940}}>
        <div style={{fontFamily:'Arial, Helvetica, sans-serif',fontSize:88,lineHeight:0.98,fontWeight:900,color:'#fff',letterSpacing:-2,textShadow:'0 5px 18px rgba(0,0,0,.72)'}}>{title}</div>
        {subtitle ? <div style={{marginTop:18,fontFamily:'Arial, Helvetica, sans-serif',fontSize:42,lineHeight:1.08,fontWeight:800,color:'#f5d76e',textShadow:'0 4px 14px rgba(0,0,0,.75)'}}>{subtitle}</div>:null}
      </div>
    </AbsoluteFill>
  );
};

const CorrectionCard: React.FC<{title:string; left:string; right:string}> = ({title,left,right}) => (
  <AbsoluteFill style={{justifyContent:'center',alignItems:'center',padding:'0 70px',background:'rgba(8,15,10,.70)'}}>
    <div style={{width:'100%',background:'rgba(16,24,18,.90)',border:'2px solid rgba(255,255,255,.14)',borderRadius:38,padding:'54px 42px',boxShadow:'0 20px 80px rgba(0,0,0,.35)'}}>
      <div style={{fontFamily:'Arial',fontSize:64,fontWeight:900,color:'#fff',textAlign:'center',marginBottom:34}}>{title}</div>
      <div style={{display:'flex',gap:24}}>
        <div style={{flex:1,borderRadius:28,padding:'36px 24px',background:'rgba(160,52,42,.18)',border:'2px solid rgba(255,120,100,.45)'}}>
          <div style={{fontFamily:'Arial',fontSize:34,fontWeight:900,color:'#ff9b8e',textAlign:'center'}}>✕</div>
          <div style={{fontFamily:'Arial',fontSize:34,fontWeight:800,color:'#fff',textAlign:'center',marginTop:12}}>{left}</div>
        </div>
        <div style={{flex:1,borderRadius:28,padding:'36px 24px',background:'rgba(52,130,72,.20)',border:'2px solid rgba(130,230,150,.45)'}}>
          <div style={{fontFamily:'Arial',fontSize:34,fontWeight:900,color:'#9be5ad',textAlign:'center'}}>✓</div>
          <div style={{fontFamily:'Arial',fontSize:34,fontWeight:800,color:'#fff',textAlign:'center',marginTop:12}}>{right}</div>
        </div>
      </div>
    </div>
  </AbsoluteFill>
);

export const YardMasterProRaisedBedShort: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor:'#0b120d'}}>
      <Video src={staticFile('source.mp4')} style={{width:'100%',height:'100%',objectFit:'cover'}} />
      <AbsoluteFill style={{background:'linear-gradient(180deg,rgba(0,0,0,.16) 0%,rgba(0,0,0,.02) 48%,rgba(0,0,0,.50) 100%)'}} />

      <Sequence from={0} durationInFrames={90}>
        <Caption top title="7 RAISED BED MISTAKES" subtitle="FIX THESE NOW" />
      </Sequence>

      <Sequence from={90} durationInFrames={180}>
        <Caption title="#1 WRONG MATERIALS" subtitle="Old railroad ties / old CCA" />
      </Sequence>

      <Sequence from={270} durationInFrames={210}>
        <Caption title="#2 TOO WIDE" subtitle="3–4 FT • REACH FROM PATHS" />
      </Sequence>

      <Sequence from={480} durationInFrames={180}>
        <Caption title="SOIL COMPACTION" subtitle="KEEP FEET OFF GROWING SOIL" />
      </Sequence>

      <Sequence from={660} durationInFrames={180}>
        <CorrectionCard title="#3 WRONG SOIL MIX" left="DENSE HEAVY CLAY" right="BALANCED GROWING MIX" />
      </Sequence>

      <Sequence from={840} durationInFrames={180}>
        <CorrectionCard title="#4 WOOD CHIPS" left="MIXED INTO SOIL" right="SURFACE OR PATH" />
      </Sequence>

      <Sequence from={1020} durationInFrames={210}>
        <Caption title="#5 MORE ≠ BETTER" subtitle="CHECK YOUR SOIL" />
      </Sequence>

      <Sequence from={1230} durationInFrames={180}>
        <Caption title="#6 DON’T WATER BY CALENDAR" subtitle="CHECK SOIL MOISTURE" />
      </Sequence>

      <Sequence from={1410} durationInFrames={210}>
        <Caption title="#7 BARE ALL WINTER" subtitle="ADD WINTER COVER" />
      </Sequence>

      <Sequence from={1620} durationInFrames={180}>
        <AbsoluteFill style={{justifyContent:'center',alignItems:'center',background:'rgba(7,14,9,.70)',padding:'0 70px'}}>
          <div style={{fontFamily:'Arial',fontSize:96,fontWeight:900,color:'#fff',textAlign:'center',lineHeight:0.95}}>FIX ALL 7</div>
          <div style={{fontFamily:'Arial',fontSize:48,fontWeight:800,color:'#f5d76e',textAlign:'center',marginTop:28}}>WATCH THE FULL VIDEO</div>
          <div style={{fontFamily:'Arial',fontSize:44,fontWeight:900,color:'#fff',textAlign:'center',marginTop:22}}>YardMasterPro</div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
