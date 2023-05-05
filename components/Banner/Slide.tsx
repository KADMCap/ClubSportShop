import { LinkButton } from "../Buttons/Button";

interface Props {
  title: string;
  description: string;
  info: string;
  imgSrc: string;
  link: string;
}

export const Slide = ({ title, description, info, imgSrc, link }: Props) => {
  return (
    <div className="w-full h-[250px] rounded-md overflow-hidden relative z-10 bg-slate-500">
      <div className="z-20 flex flex-col items-center justify-center h-full gap-2 p-4 text-center md:items-start">
        <p className="font-semibold text-md md:text-xl">{title}</p>
        <p>{description}</p>
        <p>{info && info}</p>
        <LinkButton href={link}>Check</LinkButton>
      </div>
      <div className="absolute top-0 right-0 flex items-end justify-end w-full -z-10">
        <img src={imgSrc} className="object-cover w-1/2" />
      </div>
    </div>
  );
};
