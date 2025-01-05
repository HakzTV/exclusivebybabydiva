
// Import your images
import coverImage from '../assets/images/founder1.png';  // Book cover image
import page1Image from '../assets/images/22.png';
import page2Image from '../assets/images/mens.jpeg';
import page3Image from '../assets/images/fon2.jpg';
import page4Image from '../assets/images/weee.jpg';
import page5Image from '../assets/images/fun.jpg';
import page6Image from '../assets/images/yes.png';
import Flipybook from './Flip';

const Flipbook = () => {
  const pages = [
      {
        pageNumber: 1,
      content: 'Our Origin',
      image: coverImage,  // This will be your book cover
    },
    {
        pageNumber: 2,
      content: `The genesis of ExclusiveBabydivafl (EBfl) traces back to a pivotal moment in 2018, during an adventurous road trip to the picturesque destinations of Ho and Ada. `,
      image: page1Image,
    },
    {
      pageNumber: 3,
    content: `It was within the confines of this very journey that the seeds of creativity were sown, birthing the inception of a brand poised to redefine the world of fashion. The logo, the distinct names for each category, and the unforgettable slogan all found their genesis during this memorable trip.`,
    image: page2Image,
  },
    {
        pageNumber: 4,
      content: `However, dreams often take time to mature into reality. EBfl was nurtured behind the scenes, patiently cultivated with unwavering determination. Then came the year 2020, a year that challenged the world in ways unforeseen, but it was also the year that saw the transformation of dreams into reality. `,
      image: page3Image,
    },
    {
        pageNumber: 5,
      content: ` ExclusiveBabydivafl, built on the guiding principles of Philippians 4:6-7, emerged as a shining beacon of creativity and style during the peak of the COVID-19 pandemic. Today, it stands as a testament to the formidable power of vision, unwavering determination, and steadfast faith. One of the key ingredients in this journey was a commitment to perfecting the craft. `,
      image: page4Image,
    },
    {
        pageNumber: 6,
      content: `Mildred embarked on weekly journeys, traveling from Sprintex to Dansoman on Sundays, a tangible testament to her unwavering dedication to mastering the art of sewing.From its inception, EBfl was synonymous with Mildred herself, a solo couturier meticulously crafting exquisite fashion pieces with her own hands. `,
      image: page5Image,  // Use a different image if you have one
    },  {
      pageNumber: 7,
    content: `However, as the brand's reputation grew, it evolved into a thriving team of eight individuals, each contributing their unique expertise to its success. This dedicated team, fueled by Mildred's unmakeable commitment, propelled EBfl to new heights.
    Join us on our journey.
    `,
    image: page6Image,  // Use a different image if you have one
  },
  ];

  
  return (
    <div className="flipper">

<Flipybook pages={pages} />
    </div>
  );
};
export default Flipbook;
// import { useState, useRef } from 'react';
// import FlipPage from 'react-flip-page';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// // Import your images
// import coverImage from '../assets/images/founder.jpeg';  // Book cover image
// import page1Image from '../assets/images/bod.jpg';
// import page2Image from '../assets/images/pro-7.jpeg';
// import page3Image from '../assets/images/pro-4.jpeg';

// const Flipbook = () => {
//   const pages = [
//     {
//       pageNumber: 1,
//       content: 'Our Origin',
//       image: coverImage,  // This will be your book cover
//     },
//     {
//       pageNumber: 2,
//       content: `The genesis of ExclusiveBabydivafl (EBfl) traces back to a pivotal moment in 2018, during an adventurous road trip to the picturesque destinations of Ho and Ada...`,
//       image: page1Image,
//     },
//     {
//       pageNumber: 3,
//       content: `However, dreams often take time to mature into reality. EBfl was nurtured behind the scenes, patiently cultivated with unwavering determination...`,
//       image: page2Image,
//     },
//     {
//       pageNumber: 4,
//       content: `One of the key ingredients in this journey was a commitment to perfecting the craft. Mildred embarked on weekly journeys...`,
//       image: page3Image,
//     },
//     {
//       pageNumber: 5,
//       content: `From its inception, EBfl was synonymous with Mildred herself, a solo couturier meticulously crafting exquisite fashion pieces with her own hands...`,
//       image: page3Image,
//     }, {
//       pageNumber: 6,
//       content: `From its inception, EBfl was synonymous with Mildred herself, a solo couturier meticulously crafting exquisite fashion pieces with her own hands...`,
//       image: page3Image,
//     },
//   ];

//   const [currentPage, setCurrentPage] = useState(0); // Start with the first page (index)
//   const flipPageRef = useRef(); // Reference to FlipPage

//   // Handle page flip using arrows
//   const handleNextPage = () => {
//     if (flipPageRef.current && currentPage < pages.length - 1) {
//       flipPageRef.current.next();
//     }
//   };

//   const handlePrevPage = () => {
//     if (flipPageRef.current && currentPage > 0) {
//       flipPageRef.current.previous();
//     }
//   };

//   // Update currentPage state on manual swipe
//   const handlePageChange = (pageIndex) => {
//     setCurrentPage(pageIndex);
//   };

//   return (
//     <div className="flipper">
//       <div className="flipbook-container">
//         <FlipPage
//           ref={flipPageRef}
//           className="flipbook"
//           flipOnTouch
//           orientation="horizontal"
//           onChange={handlePageChange}
//           page={currentPage} // Ensure current page syncs with arrows
//         >
//           {pages.map((page, index) => (
//             <article key={index} className="page">
//               <div className="page-left"></div> {/* Left side blank */}
//               <div className="page-right">
//                 <img src={page.image} alt={`Page ${page.pageNumber}`} className="page-image" />
//                 {page.content && <p className="page-content">{page.content}</p>}
//               </div>
//             </article>
//           ))}
//         </FlipPage>
        
//         {/* Arrow Controls */}
//         <div className="page-controls">
//           {currentPage > 0 && (
//             <button onClick={handlePrevPage} className="arrow-button">
//               <FaArrowLeft />
//             </button>
//           )}
//           {currentPage < pages.length - 1 && (
//             <button onClick={handleNextPage} className="arrow-button">
//               <FaArrowRight />
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Flipbook;
