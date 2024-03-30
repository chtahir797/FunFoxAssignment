// import './Footer.css'
// import Person from '../assets/Person.png'
// import Info from '../assets/Info.png'
// import Previous from '../assets/Pre.png'
// import Next from '../assets/Next.png'
// const Footer = ({ nextPage, previousPage }) =>{
//     return(
//         <>
//             <div className="footer-parent">
//                 <div className="footer-child">
//                     <div className="person">
//                         <img src={Person} alt="Person Image" />
//                     </div>
//                     <div className="previous">
//                         <img src={Previous} alt="Previous Image" onClick={previousPage}/>
//                     </div>
//                     <div className="select">
                        
//                     </div>
//                     <div className="next">
//                     <img src={Next} alt="Next Image" onClick={nextPage}/>
//                     </div>
//                     <div className="Info">
//                         <img src={Info} alt="Info Image" />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Footer



import './Footer.css'
import Person from '../assets/Person.png'
import Info from '../assets/Info.png'
import Previous from '../assets/Pre.png'
import Next from '../assets/Next.png'

const Footer = ({ nextPage, previousPage, currentPage, totalPages }) => {
  const handleSelectChange = (e) => {
    const selectedPage = parseInt(e.target.value);
    if (selectedPage !== currentPage) {
      // Call nextPage or previousPage only if the selected page is different from the current page
      if (selectedPage > currentPage) {
        nextPage();
      } else {
        previousPage();
      }
    }
  };

  return (
    <div className="footer-parent">
      <div className="footer-child">
        <div className="person">
          <img src={Person} alt="Person Image" />
        </div>
        <div className="allbuttons">
        <div className="previous">
          <img src={Previous} alt="Previous Image" onClick={previousPage} />
        </div>
        <div className="select">
          <select value={currentPage} onChange={handleSelectChange}>
            {[...Array(totalPages).keys()].map((page) => (
              <option key={page + 1} value={page + 1}>
                {page + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="next">
          <img src={Next} alt="Next Image" onClick={nextPage} />
        </div>
        </div>
        <div className="Info">
          <img src={Info} alt="Info Image" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
