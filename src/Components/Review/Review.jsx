import React, { useEffect, useRef } from 'react';
import Container from '../Container/Container';
import './review.css';

function Review() {
    const imageListRef = useRef(null);
    const scrollThumbRef = useRef(null);

    useEffect(() => {
        const imageList = imageListRef.current;
        const slideButtons = document.querySelectorAll(".reviews .max-width button");
        const scrollContainer = document.querySelector(".scroll-container");
        const scrollThumb = scrollThumbRef.current;

        const loadFunction = () => {
            slideButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const direction = button.id === "left" ? -1 : 1;
                    const scrollAmount = imageList.clientWidth * direction;
                    imageList.scrollBy({
                        left: scrollAmount, behavior: "smooth"
                    })
                })
            })
        };

        const buttonHandlers = () => {
            const maxScrollWidth = imageList.scrollWidth - imageList.clientWidth;
            slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
            slideButtons[1].style.display = imageList.scrollLeft >= maxScrollWidth ? "none" : "block";
        };

        const updateScroll = () => {
            const maxScrollWidth = imageList.scrollWidth - imageList.clientWidth;
            const scrollPosition = imageList.scrollLeft;
            const scrollThumbPosition = (scrollPosition / maxScrollWidth) * (scrollContainer.clientWidth - scrollThumb.offsetWidth);
            scrollThumb.style.left = `${scrollThumbPosition}px`;
        };

        imageList.addEventListener("scroll", () => {
            buttonHandlers();
            updateScroll();
        });

        scrollThumb.addEventListener("mousedown", (e) => {
            const startX = e.clientX;
            const thumbPosition = scrollThumb.offsetLeft;

            const moveFunction = (e) => {
                const maxScrollWidth = imageList.scrollWidth - imageList.clientWidth;
                const deltaX = e.clientX - startX;
                const newThumb = thumbPosition + deltaX;
                const maxThumbPosition = scrollContainer.getBoundingClientRect().width - scrollThumb.offsetWidth;
                const boundPosition = Math.max(0, Math.min(maxThumbPosition, newThumb));
                const imgPosition = (boundPosition / maxThumbPosition) * maxScrollWidth;
                scrollThumb.style.left = `${boundPosition}px`;
                imageList.scrollLeft = imgPosition;
            };

            const moveupFunction = () => {
                document.removeEventListener("mousemove", moveFunction);
                document.removeEventListener("mouseup", moveupFunction);
            };

            document.addEventListener("mousemove", moveFunction);
            document.addEventListener("mouseup", moveupFunction);
        });

        loadFunction();

        return () => {
            // Clean up event listeners
            slideButtons.forEach(button => {
                button.removeEventListener("click", () => {});
            });
            imageList.removeEventListener("scroll", () => {});
            document.removeEventListener("mousedown", () => {});
            document.removeEventListener("mousemove", () => {});
            document.removeEventListener("mouseup", () => {});
        };
    }, []);

    return (
        <Container>
            <section className="reviews" id="reviews">
                <div className="max-width">
                    <h1 className="reviews-head title">My Reviews</h1>

                    <button id="left"><i className="fa-solid fa-backward"></i></button>
                    <div className="image-list" ref={imageListRef}>
                        <div className="re-box">
                            <div className="re-img">
                                <img src="./src/assets/profile-5.jpeg" alt="" />
                            </div>
                            <div className="text">Someone name</div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ipsum.</p>
                        </div>
                        <div className="re-box">
                            <div className="re-img">
                                <img src="./src/assets/profile-3.jpeg" alt="" />
                            </div>
                            <div className="text">Someone name</div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ipsum.</p>
                        </div>
                        <div className="re-box">
                            <div className="re-img">
                                <img src="./src/assets/profile-4.jpeg" alt="" />
                            </div>
                            <div className="text">Someone name</div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ipsum.</p>
                        </div>
                        <div className="re-box">
                            <div className="re-img">
                                <img src="./src/assets/profile-5.jpeg" alt="" />
                            </div>
                            <div className="text">Someone name</div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ipsum.</p>
                        </div>
                        <div className="re-box">
                            <div className="re-img">
                                <img src="./src/assets/profile-1.jpeg" alt="" />
                            </div>
                            <div className="text">Someone name</div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ipsum.</p>
                        </div>
                        <div className="re-box">
                            <div className="re-img">
                                <img src="./src/assets/profile-2.jpeg" alt="" />
                            </div>
                            <div className="text">Someone name</div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ipsum.</p>
                        </div>
                        <div className="re-box">
                            <div className="re-img">
                                <img src="./src/assets/profile-3.jpeg" alt="" />
                            </div>
                            <div className="text">Someone name</div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ipsum.</p>
                        </div>
                        <div className="re-box">
                            <div className="re-img">
                                <img src="./src/assets/profile-4.jpeg" alt="" />
                            </div>
                            <div className="text">Someone name</div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ipsum.</p>
                        </div>
                    </div>
                    <button id="right"><i className="fa-solid fa-forward"></i></button>
                </div>
                <div className="scroll-container">
                    <div className="scroll-path">
                        <div className="scroll-thumb" ref={scrollThumbRef}></div>
                    </div>
                </div>
            </section>
        </Container>
    );
}

export default Review;
