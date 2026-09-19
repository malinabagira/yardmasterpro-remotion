export type SceneSpec = {
  start: number;
  end: number;
  label: string;
  subtitle?: string;
  asset?: string;
  align?: 'top' | 'center' | 'bottom';
};

export const scenes: SceneSpec[] = [
  {start:0,end:90,label:'7 RAISED BED MISTAKES',subtitle:'FIX THESE NOW',asset:'assets/hook.mp4',align:'top'},
  {start:90,end:270,label:'#1 WRONG MATERIALS',subtitle:'Avoid old railroad ties & CCA',asset:'assets/mistake-1.mp4'},
  {start:270,end:480,label:'#2 TOO WIDE',subtitle:'3–4 FT',asset:'assets/mistake-2.mp4'},
  {start:480,end:660,label:'SOIL COMPACTION',asset:'assets/compaction.mp4'},
  {start:660,end:840,label:'#3 WRONG SOIL MIX',asset:'assets/mistake-3.mp4'},
  {start:840,end:1020,label:'#4 DON’T MIX CHIPS IN',asset:'assets/mistake-4.mp4'},
  {start:1020,end:1230,label:'#5 MORE ≠ BETTER',subtitle:'CHECK YOUR SOIL',asset:'assets/mistake-5.mp4'},
  {start:1230,end:1410,label:'#6 DON’T WATER BY CALENDAR',subtitle:'CHECK THE SOIL',asset:'assets/mistake-6.mp4'},
  {start:1410,end:1620,label:'#7 BARE ALL WINTER',subtitle:'ADD WINTER COVER',asset:'assets/mistake-7.mp4'},
  {start:1620,end:1800,label:'FIX ALL 7',subtitle:'WATCH THE FULL VIDEO • YardMasterPro',asset:'assets/cta.mp4',align:'center'}
];

export const narration = [
  'Think your raised bed is set up right? These seven mistakes can damage your soil before next season.',
  'Number one: using old railroad ties or CCA-treated lumber around your food garden.',
  'Number two: making the bed so wide that you have to step inside it. Foot traffic compacts the soil and reduces the pore space your plants depend on.',
  'Number three: filling the bed with heavy native clay instead of a balanced growing mix.',
  'Number four: mixing wood chips directly into the active growing soil.',
  'Number five: automatically adding heavy amounts of compost every year without checking what your soil needs.',
  'Number six: watering on a fixed schedule instead of responding to actual soil moisture.',
  'And number seven: leaving raised-bed soil completely bare through winter.',
  'Want to know exactly how to fix all seven? Watch the full guide on YardMasterPro.'
].join(' ');
