import Image from 'next/image';

export default function Card() {
  return (
    <div>
      <div>
        <Image src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg" width="300" height="300" alt="" />
      </div>
      <div>
        <h3>The Majestic and Wonderful Bahamas</h3>
        <p>
          The best kept secret of The Bahamas is the country&apos;s sheer size and diversity. 
          With 16 major islands, The Bahamas is an unmatched destination
        </p>
      </div>
    </div>
  );
}
