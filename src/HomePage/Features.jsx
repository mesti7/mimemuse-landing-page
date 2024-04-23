import f5 from "../Assets/LabelsForEditor.png";
import f6 from "../Assets/RealtimeEditor.png";
import f7 from "../Assets/No2Circle.png";
import f8 from "../Assets/No3Circle.png";
import f1 from "../Assets/IntractiveEditing.png";
import f2 from "../Assets/No1Circle.png";

function Features() {
  return (
    <div>
      <div className=" text-center text-2xl bg-gradient-to-br from-red-500 to-orange-500 text-transparent bg-clip-text pt-7">
        Feature
      </div>
      <div className=" text-3xl py-7 items-center text-center">
        <div className=" grid md:grid-cols-3 px-8 py-8 lg:px-16 items-center">
          <div className=" grid text-lg ">
            <img className=" place-self-center" src={f1} />
            Editing
            <div className=" text-sm">
              Elevate Your Memes with Our Editing Feature!
            </div>
            <img className=" h-24 place-self-center" src={f2} />
          </div>
          <div className=" grid text-base ">
            <img className=" place-self-center" src={f5} />
            Badges
            <div className=" text-sm">
              Craft Memes: Claim Ownership, Get Recognized for Your Memes!
            </div>
            <img className=" h-24 place-self-center" src={f7} />
          </div>
          <div className=" grid text-base">
            <img className=" place-self-center" src={f6} />
            Realtime Editor
            <div className=" text-sm">
              Connect with your ideal meme partner for your brand
            </div>
            <img className=" h-24 place-self-center" src={f8} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
