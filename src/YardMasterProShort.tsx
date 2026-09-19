import React from 'react';
import {AbsoluteFill, Sequence, Video, staticFile, useCurrentFrame, interpolate} from 'remotion';
import {scenes} from './scenes';

const BG = '#0b120d';

const Caption: React.FC<{title:string; subtitle?:string; align?:'top'|'center'|'bottom'}> = ({title, subtitle, align='bottom'}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 8], [0, 1], {extrapolateRight:'clamp'});
  const translateY = interpolate(frame, [0, 10], [30, 0], {extrapolateRight:'clamp'});
  const justifyContent = align === 'top' ? 'flex-start' : align === 'center' ? 'center' : 'flex-end';
  return (
    <AbsoluteFill style={{justifyContent, padding:'130px 72px 170px', pointerEvents:'none'}}>
      <div style={{opacity, transform:`translateY(${translateY}px)`, maxWidth:920}}>
        <div style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:92, lineHeight:0.98, fontWeight:900, color:'white', letterSpacing:-2, textShadow:'0 5px 18px rgba(0,0,0,.65)'}}>{title}</div>
        {subtitle ? <div style={{marginTop:22, fontFamily:'Arial, Helvetica, sans-serif', fontSize:44, lineHeight:1.1, fontWeight:800, color:'#f6d96b', textShadow:'0 4px 14px rgba(0,0,0,.7)'}}>{subtitle}</div> : null}
      </div>
    </AbsoluteFill>
  );
};

const Fallback: React.FC<{name:string}> = ({name}) => (
  <AbsoluteFill style={{background:'linear-gradient(180deg,#223526 0%,#111913 100%)', alignItems:'center', justifyContent:'center'}}>
    <div style={{width:840,height:1180,borderRadius:48,border:'2px solid rgba(255,255,255,.12)',background:'rgba(255,255,255,.04)',display:'flex',alignItems:'center',justifyContent:'center',padding:60,textAlign:'center',fontFamily:'Arial',fontSize:42,fontWeight:700,color:'rgba(255,255,255,.55)'}}>
      Upload {name} to public/assets/
    </div>
  </AbsoluteFill>
);

export const YardMasterProRaisedBedShort: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor:BG}}>
      {scenes.map((scene) => {
        const duration = scene.end - scene.start;
        return (
          <Sequence key={scene.label} from={scene.start} durationInFrames={duration}>
            {scene.asset ? (
              <AbsoluteFill>
                <Fallback name={scene.asset.split('/').pop() ?? scene.asset} />
                <Video
                  src={staticFile(scene.asset)}
                  muted
                  style={{width:'100%',height:'100%',objectFit:'cover'}}
                />
                <AbsoluteFill style={{background:'linear-gradient(180deg,rgba(0,0,0,.12) 0%,rgba(0,0,0,.04) 45%,rgba(0,0,0,.58) 100%)'}} />
              </AbsoluteFill>
            ) : null}
            <Caption title={scene.label} subtitle={scene.subtitle} align={scene.align} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
