import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  Video,
  staticFile,
  useCurrentFrame,
  interpolate,
} from 'remotion';

const FONT = 'Arial, Helvetica, sans-serif';

const BigText: React.FC<{title:string; subtitle?:string; top?:boolean}> = ({title, subtitle, top=false}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame,[0,8],[0,1],{extrapolateRight:'clamp'});
  const y = interpolate(frame,[0,10],[22,0],{extrapolateRight:'clamp'});
  return (
    <AbsoluteFill style={{justifyContent:top?'flex-start':'flex-end',padding:top?'135px 70px':'0 70px 180px',pointerEvents:'none'}}>
      <div style={{opacity,transform:`translateY(${y}px)`,maxWidth:940}}>
        <div style={{fontFamily:FONT,fontSize:86,lineHeight:0.96,fontWeight:900,color:'#fff',letterSpacing:-2,textShadow:'0 5px 18px rgba(0,0,0,.75)'}}>{title}</div>
        {subtitle ? <div style={{marginTop:18,fontFamily:FONT,fontSize:42,lineHeight:1.08,fontWeight:800,color:'#f5d76e',textShadow:'0 4px 14px rgba(0,0,0,.75)'}}>{subtitle}</div> : null}
      </div>
    </AbsoluteFill>
  );
};

const SourceSegment: React.FC<{from:number; duration:number; title?:string; subtitle?:string; top?:boolean}> = ({from,duration,title,subtitle,top}) => (
  <Sequence from={from} durationInFrames={duration}>
    <AbsoluteFill>
      <Video
        src={staticFile('source.mp4')}
        startFrom={from}
        muted={false}
        style={{width:'100%',height:'100%',objectFit:'cover'}}
      />
      {title ? <>
        <AbsoluteFill style={{background:'linear-gradient(180deg,rgba(0,0,0,.10) 0%,rgba(0,0,0,.02) 52%,rgba(0,0,0,.45) 100%)'}} />
        <BigText title={title} subtitle={subtitle} top={top} />
      </> : null}
    </AbsoluteFill>
  </Sequence>
);

const HookReplacement: React.FC = () => {
  const frame=useCurrentFrame();
  const scale=interpolate(frame,[0,90],[1.02,1.08],{extrapolateRight:'clamp'});
  return (
    <AbsoluteFill style={{background:'linear-gradient(180deg,#263a28 0%,#0c140e 100%)',overflow:'hidden'}}>
      <AbsoluteFill style={{transform:`scale(${scale})`,background:
        'radial-gradient(circle at 50% 70%, rgba(92,125,74,.65) 0%, rgba(42,68,42,.35) 35%, rgba(8,14,10,.9) 72%), linear-gradient(135deg,#1f3323,#0b120d)'}} />
      <div style={{position:'absolute',left:80,right:80,top:300,bottom:300,borderRadius:46,border:'3px solid rgba(255,255,255,.12)',background:'linear-gradient(180deg,rgba(112,78,47,.36),rgba(56,34,19,.56))',boxShadow:'0 30px 100px rgba(0,0,0,.35)'}} />
      <div style={{position:'absolute',left:130,right:130,top:410,bottom:410,borderRadius:38,background:'radial-gradient(circle at 50% 40%,#5c4733 0%,#37291f 70%)',boxShadow:'inset 0 0 70px rgba(0,0,0,.35)'}} />
      <div style={{position:'absolute',left:105,top:210,fontFamily:FONT,fontSize:98,fontWeight:900,color:'#fff',lineHeight:0.94,letterSpacing:-3,textShadow:'0 6px 24px rgba(0,0,0,.7)'}}>7 RAISED BED<br/>MISTAKES</div>
      <div style={{position:'absolute',left:108,bottom:210,fontFamily:FONT,fontSize:54,fontWeight:900,color:'#f5d76e'}}>FIX THESE NOW</div>
    </AbsoluteFill>
  );
};

const SoilMixReplacement: React.FC = () => (
  <AbsoluteFill style={{background:'linear-gradient(180deg,#142018,#0b120d)',padding:'140px 64px 150px'}}>
    <div style={{fontFamily:FONT,fontSize:70,fontWeight:900,color:'#fff',textAlign:'center',marginBottom:50}}>#3 WRONG SOIL MIX</div>
    <div style={{display:'flex',gap:26,flex:1}}>
      <div style={{flex:1,borderRadius:42,background:'linear-gradient(180deg,#6e5546,#3d2d25)',padding:32,border:'3px solid rgba(255,110,90,.55)',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <div style={{fontFamily:FONT,fontSize:42,fontWeight:900,color:'#ff9f90',textAlign:'center'}}>✕ HEAVY CLAY</div>
        <div style={{height:'62%',borderRadius:28,background:'radial-gradient(circle at 30% 25%,#8d6d59 0 10%,transparent 11%), radial-gradient(circle at 65% 50%,#7b5a48 0 13%,transparent 14%), linear-gradient(180deg,#765947,#493529)',boxShadow:'inset 0 0 70px rgba(0,0,0,.3)'}}/>
        <div style={{fontFamily:FONT,fontSize:30,fontWeight:700,color:'#fff',textAlign:'center'}}>Dense • sticky • poorly draining</div>
      </div>
      <div style={{flex:1,borderRadius:42,background:'linear-gradient(180deg,#2f4a34,#1d2d20)',padding:32,border:'3px solid rgba(130,230,150,.55)',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <div style={{fontFamily:FONT,fontSize:42,fontWeight:900,color:'#9be5ad',textAlign:'center'}}>✓ BALANCED MIX</div>
        <div style={{height:'62%',borderRadius:28,background:'radial-gradient(circle at 20% 20%,#654b35 0 5%,transparent 6%), radial-gradient(circle at 55% 45%,#8a684c 0 4%,transparent 5%), radial-gradient(circle at 72% 70%,#4d392a 0 5%,transparent 6%), linear-gradient(180deg,#5d4633,#2f241c)',boxShadow:'inset 0 0 70px rgba(0,0,0,.24)'}}/>
        <div style={{fontFamily:FONT,fontSize:30,fontWeight:700,color:'#fff',textAlign:'center'}}>Loose • airy • structured</div>
      </div>
    </div>
  </AbsoluteFill>
);

const WoodChipsReplacement: React.FC = () => (
  <AbsoluteFill style={{background:'linear-gradient(180deg,#152116,#0b120d)',padding:'140px 64px 150px'}}>
    <div style={{fontFamily:FONT,fontSize:70,fontWeight:900,color:'#fff',textAlign:'center',marginBottom:50}}>#4 WOOD CHIPS</div>
    <div style={{display:'flex',gap:26,flex:1}}>
      <div style={{flex:1,borderRadius:42,background:'linear-gradient(180deg,#5a3f2c,#2e2119)',padding:32,border:'3px solid rgba(255,110,90,.55)',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <div style={{fontFamily:FONT,fontSize:42,fontWeight:900,color:'#ff9f90',textAlign:'center'}}>✕ IN SOIL</div>
        <div style={{height:'62%',borderRadius:28,background:'repeating-linear-gradient(25deg,#806044 0 14px,#5e432f 14px 27px,#3d2c22 27px 41px)',boxShadow:'inset 0 0 75px rgba(0,0,0,.32)'}}/>
        <div style={{fontFamily:FONT,fontSize:30,fontWeight:700,color:'#fff',textAlign:'center'}}>Don't mix chips into the active growing layer</div>
      </div>
      <div style={{flex:1,borderRadius:42,background:'linear-gradient(180deg,#324a33,#1d2d20)',padding:32,border:'3px solid rgba(130,230,150,.55)',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <div style={{fontFamily:FONT,fontSize:42,fontWeight:900,color:'#9be5ad',textAlign:'center'}}>✓ ON PATHS</div>
        <div style={{height:'62%',borderRadius:28,background:'linear-gradient(90deg,#49623d 0 30%,#8a6846 30% 70%,#49623d 70%),boxShadow:'inset 0 0 65px rgba(0,0,0,.25)'}}/>
        <div style={{fontFamily:FONT,fontSize:30,fontWeight:700,color:'#fff',textAlign:'center'}}>Use on pathways or as surface material</div>
      </div>
    </div>
  </AbsoluteFill>
);

const CTAReplacement: React.FC = () => (
  <AbsoluteFill style={{background:'radial-gradient(circle at 50% 35%,#29442d 0%,#132018 38%,#08100b 78%)',alignItems:'center',justifyContent:'center',padding:'0 80px'}}>
    <div style={{fontFamily:FONT,fontSize:112,fontWeight:900,color:'#fff',textAlign:'center',lineHeight:.92,letterSpacing:-3}}>FIX ALL 7</div>
    <div style={{fontFamily:FONT,fontSize:52,fontWeight:900,color:'#f5d76e',textAlign:'center',marginTop:30}}>WATCH THE FULL VIDEO</div>
    <div style={{fontFamily:FONT,fontSize:48,fontWeight:900,color:'#fff',textAlign:'center',marginTop:26,letterSpacing:1}}>YardMasterPro</div>
  </AbsoluteFill>
);

export const YardMasterProRaisedBedShort: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor:'#0b120d'}}>
      {/* True replacement hook: source is fully hidden */}
      <Sequence from={0} durationInFrames={90}><HookReplacement /></Sequence>

      {/* Keep original source segments where the visuals are usable, without duplicate overlays */}
      <SourceSegment from={90} duration={570} />

      {/* True replacement for mistake #3 */}
      <Sequence from={660} durationInFrames={180}><SoilMixReplacement /></Sequence>

      {/* True replacement for mistake #4 */}
      <Sequence from={840} durationInFrames={180}><WoodChipsReplacement /></Sequence>

      {/* Resume original source without extra duplicate captions */}
      <SourceSegment from={1020} duration={600} />

      {/* True replacement CTA */}
      <Sequence from={1620} durationInFrames={180}><CTAReplacement /></Sequence>
    </AbsoluteFill>
  );
};
