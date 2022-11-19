const styles = {
  boxWidth: 'xl:max-w-[1280px] w-full',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-start items-center',
  flexStartX: 'flex justify-start items-start',

  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-16 py-6',
  padding: 'sm:px-6 px-4 sm:py-6 py-4',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',

  navigation:
    'absolute w-full h-[200px] ss:h-[300px] sm:h-[400px] md:h-[500px] flex justify-between items-center text-[35px] navigation',

  PrevNext:
    'w-[30px] h-[40px] sm:w-[40px] sm:h-[60px] z-90 text-[28px] sm:text-[38px] text-dimBlack bg-dimGray p-2 cursor-pointer',

  sliderInfo:
    'absolute text-dimBlack w-[80%] ss:w-[88%] md:w-[90%] top-[0%] xs:top-[2%] md:top-[15%] p-5 z-10',

  sliderHeading:
    'w-[96%] font-primary h-auto text-[20px] ss:text-[26px] sm:text-[32px] md:text-[52px] font-extrabold uppercase line-clamp-2',

  sliderParagraph:
    'flex w-full md:w-[88%] h-auto text-justify text-dimBlack text-[10px] xs:text-[14px] sm:text-[18px] font-primary font-normal mt-3 line-clamp-4 md:line-clamp-none',

  bannerButton:
    'flex justify-center items-center xs:w-[125px] sm:w-[200px] ss:h-[30px] sm:h-[40px] bg-transparent rounded-full text-white font-primary font-medium text-[12px] ss:text-[14px] sm:text-[20px] cursor-pointer shadow-5xl border-2 border-primary mt-3 mr-1 ss:mr-3 animation-img',

  bannerHeading:
    'font-primary font-bold text-[26px] sm:text-[32px] md:text-[36px] text-white mt-10 text-center sm:text-start',

  bannerParagraph:
    'ss:w-full font-primary font-normal text-[14px] ss:text-[16px] md:text-[18px] text-white text-justify  mt-2',
};

export default styles;
