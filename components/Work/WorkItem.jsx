import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Badge } from "../ui/badge";

const WorkItem = ({ href, category, img, title }) => {
  return (
    <Link href="https://drive.google.com/drive/folders/11Qiu2zLm-PtGW3FmcKuG9YjqI7xnHETx?usp=drive_link" className="group">
      <div className="flex items-center justify-center">
        <div className="flex-1">
          <h3 className="h5">{title}</h3>
        </div>
        <button className="bg-accent text-white rounded-full w-[28px] h-[28px] flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500">
          <FiArrowRight className="text-xl" />
        </button>
      </div>
    </Link>
  );
};

export default WorkItem;
