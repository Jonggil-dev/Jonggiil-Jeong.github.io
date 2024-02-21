import CallIcon from "../assets/images/CallIcon.png";
import GitHubIcon from "../assets/images/GitHubIcon.png";
import EmailIcon from "../assets/images/EmailIcon.png";

const Contact = () => {
  return (
    <section id="contact" className="p-12 bg-[#656667] pb-5">
      <div className="mx-auto flex flex-col text-white items-center">
        <h2 className="text-4xl font-bold text-center mb-10">Contact.</h2>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <img
              className="w-8 h-8 rounded-full"
              src={CallIcon}
              alt="Phone Icon"
            />
            <p>010-5356-3051</p>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="w-8 h-8 rounded-full"
              src={EmailIcon}
              alt="Email Icon"
            />
            <p>jonggil.jeong24@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="w-8 h-8 rounded-full"
              src={GitHubIcon}
              alt="GitHub Icon"
            />
            <a href="https://github.com/Jonggil-dev">
              https://github.com/Jonggil-dev
            </a>
          </div>
        </div>
        <p className="mt-5 text-center">
          Copyright 2024. Web developer portfolio -- by Jonggil.Jeong
        </p>
      </div>
    </section>
  );
};

export default Contact;
