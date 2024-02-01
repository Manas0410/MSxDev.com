import { useEffect } from "react";
import "./styles/demoBanner.css";
const DemoBanner = () => {
  useEffect(() => {
    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".slider-nav",
    });
    $(".slider-nav").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      dots: true,
      focusOnSelect: true,
    });

    $("a[data-slide]").click(function (e) {
      e.preventDefault();
      var slideno = $(this).data("slide");
      $(".slider-nav").slick("slickGoTo", slideno - 1);
    });
  }, []);
  return (
    <>
      <div class="main">
        <div class="slider slider-for">
          <div>
            <h3 className="htClass">1</h3>
          </div>
          <div>
            <h3 className="htClass">2</h3>
          </div>
          <div>
            <h3 className="htClass">3</h3>
          </div>
          <div>
            <h3 className="htClass">4</h3>
          </div>
          <div>
            <h3 className="htClass">5</h3>
          </div>
        </div>
        <div class="slider slider-nav">
          <div>
            <h3 className="htClass">1</h3>
          </div>
          <div>
            <h3 className="htClass">2</h3>
          </div>
          <div>
            <h3 className="htClass">3</h3>
          </div>
          <div>
            <h3 className="htClass">4</h3>
          </div>
          <div>
            <h3 className="htClass">5</h3>
          </div>
        </div>
        <div class="action">
          <a href="#" data-slide="3">
            go to slide 3
          </a>
          <a href="#" data-slide="4">
            go to slide 4
          </a>
          <a href="#" data-slide="5">
            go to slide 5
          </a>
        </div>
      </div>
    </>
  );
};
export default DemoBanner;
