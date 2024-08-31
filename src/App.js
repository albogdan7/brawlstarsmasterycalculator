import React, { useState } from 'react';
import './index.css';
import ShellyImage from './brawler.pfps/Shelly.pfp.png';
import NitaImage from './brawler.pfps/Nita.pfp.png';
import ColtImage from './brawler.pfps/Colt.pfp.png';
import BullImage from './brawler.pfps/Bull.pfp.png';
import BrockImage from './brawler.pfps/brock.jpeg';
import ElprimoImage from './brawler.pfps/Elprimo.pfp.png';
import BarleyImage from './brawler.pfps/barley.jpeg';
import PocoImage from './brawler.pfps/Poco.pfp.png';
import RosaImage from './brawler.pfps/Rosa.pfp.png';
import JessieImage from './brawler.pfps/Jessie.pfp.png';
import DynamikeImage from './brawler.pfps/Dynamike.pfp.png';
import TickImage from './brawler.pfps/Tick.pfp.png';
import EightBitImage from './brawler.pfps/8-Bit.pfp.png';
import RicoImage from './brawler.pfps/Rico.pfp.png';
import DarrylImage from './brawler.pfps/Darryl.pfp.png';
import PennyImage from './brawler.pfps/Penny.pfp.png';
import CarlImage from './brawler.pfps/Carl.pfp.png';
import JackyImage from './brawler.pfps/Jacky.pfp.png';
import GusImage from './brawler.pfps/Gus.pfp.png';
import BoImage from './brawler.pfps/Bo.pfp.png';
import EmzImage from './brawler.pfps/Emz.pfp.png';
import StuImage from './brawler.pfps/Stu.pfp.png';
import PiperImage from './brawler.pfps/Piper.pfp.png';
import PamImage from './brawler.pfps/Pam.pfp.png';
import FrankImage from './brawler.pfps/Frank.pfp.png';
import BibiImage from './brawler.pfps/Bibi.pfp.png';
import BeaImage from './brawler.pfps/Bea.pfp.png';
import NaniImage from './brawler.pfps/Nani.pfp.png';
import EdgarImage from './brawler.pfps/Edgar.pfp.png';
import GriffImage from './brawler.pfps/Griff.pfp.png';
import GromImage from './brawler.pfps/Grom.pfp.png';
import BonnieImage from './brawler.pfps/Bonnie.pfp.png';
import GaleImage from './brawler.pfps/Gale.pfp.png';
import ColetteImage from './brawler.pfps/Colette.pfp.png';
import BelleImage from './brawler.pfps/Belle.pfp.png';
import AshImage from './brawler.pfps/Ash.pfp.png';
import LolaImage from './brawler.pfps/Lola.pfp.png';
import SamImage from './brawler.pfps/Sam.pfp.png';
import MandyImage from './brawler.pfps/Mandy.pfp.png';
import MaisieImage from './brawler.pfps/Maisie.pfp.png';
import HankImage from './brawler.pfps/Hank.pfp.png';
import PearlImage from './brawler.pfps/Pearl.pfp.png';
import LarryImage from './brawler.pfps/Larry-&-Lawrie.pfp.png';
import AngeloImage from './brawler.pfps/Angelo.pfp.png';
import MortisImage from './brawler.pfps/Mortis.png';
import TaraImage from './brawler.pfps/Tara.png';
import GeneImage from './brawler.pfps/Gene.png';
import MaxImage from './brawler.pfps/Max.png';
import MrPImage from './brawler.pfps/Mr-P.png';
import SproutImage from './brawler.pfps/Sprout.png';
import ByronImage from './brawler.pfps/Byron.png';
import SqueakImage from './brawler.pfps/Squeak.png';
import LouImage from './brawler.pfps/Lou.png';
import RuffsImage from './brawler.pfps/Ruffs.png';
import BuzzImage from './brawler.pfps/Buzz.png';
import FangImage from './brawler.pfps/Fang.png';
import EveImage from './brawler.pfps/Eve.png';
import JanetImage from './brawler.pfps/Janet.png';
import OtisImage from './brawler.pfps/Otis.png';
import BusterImage from './brawler.pfps/Buster.png';
import GrayImage from './brawler.pfps/Gray.png';
import RTImage from './brawler.pfps/R-T.png';
import WillowImage from './brawler.pfps/Willow.png';
import DougImage from './brawler.pfps/Doug.png';
import ChuckImage from './brawler.pfps/Chuck.png';
import CharlieImage from './brawler.pfps/Charlie.png';
import MicoImage from './brawler.pfps/Mico.png';
import MelodieImage from './brawler.pfps/Melodie.png';
import LilyImage from './brawler.pfps/Lily.png';
import SpikeImage from './brawler.pfps/Spike.png';
import CrowImage from './brawler.pfps/Crow.png';
import LeonImage from './brawler.pfps/Leon.png';
import SandyImage from './brawler.pfps/Sandy.png';
import AmberImage from './brawler.pfps/Amber.png';
import MegImage from './brawler.pfps/Meg.png';
import SurgeImage from './brawler.pfps/Surge.png';
import ChesterImage from './brawler.pfps/Chester.png';
import CordeliusImage from './brawler.pfps/Cordelius.png';
import KitImage from './brawler.pfps/Kit.png';
import DracoImage from './brawler.pfps/Draco.png';



const brawlersData = [
  { name: 'Shelly', image: ShellyImage, rarity: 'rare' },
  { name: 'Nita', image: NitaImage, rarity: 'rare' },
  { name: 'Colt', image: ColtImage, rarity: 'rare' },
  { name: 'Bull', image: BullImage, rarity: 'rare' },
  { name: 'Brock', image: BrockImage, rarity: 'rare' },
  { name: 'El Primo', image: ElprimoImage, rarity: 'rare' },
  { name: 'Barley', image: BarleyImage, rarity: 'rare' },
  { name: 'Poco', image: PocoImage, rarity: 'rare' },
  { name: 'Rosa', image: RosaImage, rarity: 'rare' },
  { name: 'Jessie', image: JessieImage, rarity: 'super-rare' },
  { name: 'Dynamike', image: DynamikeImage, rarity: 'super-rare' },
  { name: 'Tick', image: TickImage, rarity: 'super-rare' },
  { name: '8-Bit', image: EightBitImage, rarity: 'super-rare' },
  { name: 'Rico', image: RicoImage, rarity: 'super-rare' },
  { name: 'Darryl', image: DarrylImage, rarity: 'super-rare' },
  { name: 'Penny', image: PennyImage, rarity: 'super-rare' },
  { name: 'Carl', image: CarlImage, rarity: 'super-rare' },
  { name: 'Jacky', image: JackyImage, rarity: 'super-rare' },
  { name: 'Gus', image: GusImage, rarity: 'super-rare' },
  { name: 'Bo', image: BoImage, rarity: 'epic' },
{ name: 'Emz', image: EmzImage, rarity: 'epic' },
{ name: 'Stu', image: StuImage, rarity: 'epic' },
{ name: 'Piper', image: PiperImage, rarity: 'epic' },
{ name: 'Pam', image: PamImage, rarity: 'epic' },
{ name: 'Frank', image: FrankImage, rarity: 'epic' },
{ name: 'Bibi', image: BibiImage, rarity: 'epic' },
{ name: 'Bea', image: BeaImage, rarity: 'epic' },
{ name: 'Nani', image: NaniImage, rarity: 'epic' },
{ name: 'Edgar', image: EdgarImage, rarity: 'epic' },
{ name: 'Griff', image: GriffImage, rarity: 'epic' },
{ name: 'Grom', image: GromImage, rarity: 'epic' },
{ name: 'Bonnie', image: BonnieImage, rarity: 'epic' },
{ name: 'Gale', image: GaleImage, rarity: 'epic' },
{ name: 'Colette', image: ColetteImage, rarity: 'epic' },
{ name: 'Belle', image: BelleImage, rarity: 'epic' },
{ name: 'Ash', image: AshImage, rarity: 'epic' },
{ name: 'Lola', image: LolaImage, rarity: 'epic' },
{ name: 'Sam', image: SamImage, rarity: 'epic' },
{ name: 'Mandy', image: MandyImage, rarity: 'epic' },
{ name: 'Maisie', image: MaisieImage, rarity: 'epic' },
{ name: 'Hank', image: HankImage, rarity: 'epic' },
{ name: 'Pearl', image: PearlImage, rarity: 'epic' },
{ name: 'Larry & Lawrie', image: LarryImage, rarity: 'epic' },
{ name: 'Angelo', image: AngeloImage, rarity: 'epic' },
{ name: 'Mortis', image: MortisImage, rarity: 'mythic' },
{ name: 'Tara', image: TaraImage, rarity: 'mythic' },
{ name: 'Gene', image: GeneImage, rarity: 'mythic' },
{ name: 'Max', image: MaxImage, rarity: 'mythic' },
{ name: 'Mr. P', image: MrPImage, rarity: 'mythic' },
{ name: 'Sprout', image: SproutImage, rarity: 'mythic' },
{ name: 'Byron', image: ByronImage, rarity: 'mythic' },
{ name: 'Squeak', image: SqueakImage, rarity: 'mythic' },
{ name: 'Lou', image: LouImage, rarity: 'mythic' },
{ name: 'Ruffs', image: RuffsImage, rarity: 'mythic' },
{ name: 'Buzz', image: BuzzImage, rarity: 'mythic' },
{ name: 'Fang', image: FangImage, rarity: 'mythic' },
{ name: 'Eve', image: EveImage, rarity: 'mythic' },
{ name: 'Janet', image: JanetImage, rarity: 'mythic' },
{ name: 'Otis', image: OtisImage, rarity: 'mythic' },
{ name: 'Buster', image: BusterImage, rarity: 'mythic' },
{ name: 'Gray', image: GrayImage, rarity: 'mythic' },
{ name: 'R-T', image: RTImage, rarity: 'mythic' },
{ name: 'Willow', image: WillowImage, rarity: 'mythic' },
{ name: 'Doug', image: DougImage, rarity: 'mythic' },
{ name: 'Chuck', image: ChuckImage, rarity: 'mythic' },
{ name: 'Charlie', image: CharlieImage, rarity: 'mythic' },
{ name: 'Mico', image: MicoImage, rarity: 'mythic' },
{ name: 'Melodie', image: MelodieImage, rarity: 'mythic' },
{ name: 'Lily', image: LilyImage, rarity: 'mythic' },
{ name: 'Spike', image: SpikeImage, rarity: 'legendary' },
{ name: 'Crow', image: CrowImage, rarity: 'legendary' },
{ name: 'Leon', image: LeonImage, rarity: 'legendary' },
{ name: 'Sandy', image: SandyImage, rarity: 'legendary' },
{ name: 'Amber', image: AmberImage, rarity: 'legendary' },
{ name: 'Meg', image: MegImage, rarity: 'legendary' },
{ name: 'Surge', image: SurgeImage, rarity: 'legendary' },
{ name: 'Chester', image: ChesterImage, rarity: 'legendary' },
{ name: 'Cordelius', image: CordeliusImage, rarity: 'legendary' },
{ name: 'Kit', image: KitImage, rarity: 'legendary' },
{ name: 'Draco', image: DracoImage, rarity: 'legendary' },
];

const Brawler = ({ name, image, rarity, mastery, onMasteryChange }) => {
  const loadingBarWidth = (mastery / 24800) * 100;

  const getLoadingBarColor = (percentage) => {
    if (percentage < 10) return 'bg-red-600';
    if (percentage < 20) return 'bg-red-500';
    if (percentage < 30) return 'bg-orange-500';
    if (percentage < 40) return 'bg-orange-400';
    if (percentage < 50) return 'bg-yellow-500';
    if (percentage < 60) return 'bg-yellow-400';
    if (percentage < 70) return 'bg-green-400';
    return 'bg-green-500';
  };

  const getSymbolAndColor = (value) => {
    const levels = [
      { max: 299, symbol: '', color: '', size: '' },
      { max: 799, symbol: 'I', color: 'text-customBrown', size: 'text-4xl' },
      { max: 1499, symbol: 'II', color: 'text-customBrown', size: 'text-4xl' },
      { max: 2599, symbol: 'III', color: 'text-customBrown', size: 'text-4xl' },
      { max: 3999, symbol: 'I', color: 'text-gray-200', size: 'text-4xl' },
      { max: 5799, symbol: 'II', color: 'text-gray-200', size: 'text-4xl' },
      { max: 10299, symbol: 'III', color: 'text-gray-200', size: 'text-4xl' },
      { max: 16799, symbol: 'I', color: 'text-yellow-500', size: 'text-4xl' },
      { max: 24799, symbol: 'II', color: 'text-yellow-500', size: 'text-4xl' },
      { max: 24800, symbol: 'III', color: 'text-yellow-500', size: 'text-4xl' },
    ];

    for (const level of levels) {
      if (value <= level.max) {
        return level;
      }
    }

    return { symbol: '', color: '', size: '' };
  };

  const { symbol, color, size } = getSymbolAndColor(mastery);

  return (
    <div className="w-full flex items-start ml-3 mt-5">
      <img src={image} alt={name} className="w-32 h-32" />
      <div className="ml-4 flex flex-col items-start">
        <span className="text-white font-lilita text-2xl">
          {name.toUpperCase()} - <span className="text-gray-400">{rarity.toUpperCase()}</span>
        </span>
        <div className="mt-2 flex items-center">
          <span className="text-white font-lilita text-2xl">Total Mastery -</span>
          <input
  type="number"
  className="bg-gray-400 text-white font-lilita text-2xl px-4 py-2 ml-2 flex-1"
  placeholder="Enter Number"
  value={mastery === 0 ? '' : mastery}
  onChange={(e) => onMasteryChange(e.target.value === '' ? 0 : parseInt(e.target.value, 10))}
/>
          <span className={`font-lilita ${size} ml-2 ${color}`}>{symbol}</span>
        </div>
        <div className="w-full max-w-sm bg-gray-300 h-4 rounded mt-2">
          <div
            className={`h-full rounded ${getLoadingBarColor(loadingBarWidth)}`}
            style={{ width: `${loadingBarWidth}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const initialMasteries = brawlersData.reduce((acc, brawler) => {
    acc[brawler.name] = 0;
    return acc;
  }, {});

  const [masteries, setMasteries] = useState(initialMasteries);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortedBrawlers, setSortedBrawlers] = useState(brawlersData);

  const handleMasteryChange = (name) => (value) => {
    setMasteries((prevMasteries) => ({
      ...prevMasteries,
      [name]: Math.max(0, Math.min(24800, isNaN(value) ? 0 : value)),
    }));
  };
  

  const sortBrawlers = () => {
    setSortedBrawlers([...brawlersData].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const revertBrawlers = () => {
    setSortedBrawlers(brawlersData);
  };

  const filteredBrawlers = sortedBrawlers
    .filter((brawler) => filter === 'all' || brawler.rarity === filter)
    .filter((brawler) => brawler.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const totalMastery = Object.values(masteries).reduce((acc, value) => acc + value, 0);
  const maximumPossibleMastery = 24800 * brawlersData.length;
  const averageMastery = totalMastery / brawlersData.length;

  const thresholds = {
    bronzeI: 300,
    bronzeII: 800,
    bronzeIII: 1500,
    silverI: 2600,
    silverII: 4000,
    silverIII: 5800,
    goldI: 10300,
    goldII: 16800,
    goldIII: 24800,
  };

  const counts = Object.keys(thresholds).reduce((acc, key) => {
    acc[key] = Object.values(masteries).filter(mastery => mastery >= thresholds[key]).length;
    return acc;
  }, {});

  return (
    <div className="bg-gray-500 h-screen flex flex-col items-center justify-start">
      <div className="text-customYellow font-lilita text-4xl text-outline mt-4">
        BRAWL STARS MASTERY CALCULATOR
      </div>
      <div className="w-full flex items-start ml-2 mt-0">
        <div className="text-customYellow font-lilita text-2xl mt-3">SORT BY:</div>
      </div>
      <div className="w-full flex justify-start mt-4">
        <button className="bg-gray-400 text-white font-lilita text-2xl px-10 py-5" onClick={() => setFilter('all')}>ALL</button>
        <button className="bg-green-200 text-green-500 font-lilita text-2xl px-10 py-5 ml-0" onClick={() => setFilter('rare')}>RARE</button>
        <button className="bg-blue-200 text-blue-500 font-lilita text-2xl px-10 py-5 ml-0" onClick={() => setFilter('super-rare')}>SUPER-RARE</button>
        <button className="bg-violet-200 text-violet-500 font-lilita text-2xl px-10 py-5 ml-0" onClick={() => setFilter('epic')}>EPIC</button>
        <button className="bg-red-200 text-red-500 font-lilita text-2xl px-10 py-5 ml-0" onClick={() => setFilter('mythic')}>MYTHIC</button>
        <button className="bg-yellow-200 text-yellow-500 font-lilita text-2xl px-10 py-5 ml-0" onClick={() => setFilter('legendary')}>LEGENDARY</button>
      </div>
      <div className="w-full flex items-start mt-4">
        <button className="bg-gray-400 text-white font-lilita text-2xl px-10 py-5" onClick={revertBrawlers}>DEFAULT</button>
        <button className="bg-red-400 text-white font-lilita text-2xl px-10 py-5 mr-2" onClick={sortBrawlers}>SORT A-Z</button>
      </div>
      <div className="w-full flex items-start ml-2 mt-4">
        <div className="text-customYellow font-lilita text-2xl mt-3">BRAWLERS:</div>
        <input 
          type="text" 
          className="bg-gray-400 text-white font-lilita text-2xl px-4 py-2 ml-2" 
          placeholder="Enter Brawler Name" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
      </div>
      {filteredBrawlers.map(({ name, image, rarity }) => (
        <Brawler
          key={name}
          name={name}
          image={image}
          rarity={rarity}
          mastery={masteries[name]}
          onMasteryChange={handleMasteryChange(name)}
        />
      ))}
      <div className="text-customYellow font-lilita text-4xl">MASTERIES COMPLETED</div>
      <div className="text-customYellow font-lilita text-4xl mt-2">
        TOTAL MASTERY: {totalMastery} / {maximumPossibleMastery} ({((totalMastery / maximumPossibleMastery) * 100).toFixed(2)}%)
      </div>
      <div className="text-customYellow font-lilita text-4xl">
        AVERAGE BRAWLER MASTERY: {averageMastery.toFixed(2)}
      </div>
      <div className="text-customBrown font-lilita text-2xl mt-2">
        BRONZE I: {counts.bronzeI} / {brawlersData.length} ({((counts.bronzeI / brawlersData.length) * 100).toFixed(2)}%)
      </div>
      <div className="text-customBrown font-lilita text-2xl mt-2">
        BRONZE II: {counts.bronzeII} / {brawlersData.length} ({((counts.bronzeII / brawlersData.length) * 100).toFixed(2)}%)
      </div>
      <div className="text-customBrown font-lilita text-2xl mt-2">
        BRONZE III: {counts.bronzeIII} / {brawlersData.length} ({((counts.bronzeIII / brawlersData.length) * 100).toFixed(2)}%)
      </div>
      <div className="text-customGray font-lilita text-2xl mt-2">
        SILVER I: {counts.silverI} / {brawlersData.length} ({((counts.silverI / brawlersData.length) * 100).toFixed(2)}%)
      </div>
      <div className="text-customGray font-lilita text-2xl mt-2">
        SILVER II: {counts.silverII} / {brawlersData.length} ({((counts.silverII / brawlersData.length) * 100).toFixed(2)}%)
      </div>
      <div className="text-customGray font-lilita text-2xl mt-2">
        SILVER III: {counts.silverIII} / {brawlersData.length} ({((counts.silverIII / brawlersData.length) * 100).toFixed(2)}%)
      </div>
      <div className="text-customYellow font-lilita text-2xl mt-2">
        GOLD I: {counts.goldI} / {brawlersData.length} ({((counts.goldI / brawlersData.length) * 100).toFixed(2)}%)
      </div>
      <div className="text-customYellow font-lilita text-2xl mt-2">
        GOLD II: {counts.goldII} / {brawlersData.length} ({((counts.goldII / brawlersData.length) * 100).toFixed(2)}%)
      </div>
      <div className="text-customYellow font-lilita text-2xl mt-2">
        GOLD III: {counts.goldIII} / {brawlersData.length} ({((counts.goldIII / brawlersData.length) * 100).toFixed(2)}%)
      </div>
    </div>
  );
}

export default App;