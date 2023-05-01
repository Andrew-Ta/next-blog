import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className='w-full mx-auto'>
      <Image
        src='/images/monkey-king.jpeg'
        alt='Andrew Ta'
        width={200}
        height={200}
        className='rounded-full mx-auto border-4 mt-8 border-black dark:border-slate-500 drop-shadow-xl shadow-black'
        priority={true}
      />
    </section>
  );
}
