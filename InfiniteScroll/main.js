const API_BASE_URL = 'https://api.frontendexpert.io/api/fe/testimonials';

const PAGE_SIZE = 5;

const testimonialContainer = document.getElementById('testimonial-container');
fetchAndAppendTestimonials()

function fetchAndAppendTestimonials() {

    const url = createTestimonialsUrl();
    fetch(url)
    .then(res => res.json())
    .then(({testimonials, hasNext}) => {


        testimonials.forEach(({message})  => {
            const fragment  = document.createDocumentFragment();
               fragment.appendChild(createTestimonialElement(message));
        });
        testimonialContainer(appendChild.fragment);
    });
}

function createTestimonialElement (message){
const testimonialElement = document.createElement('p');
testimonialElement.classList.add('testimonial');
testimonialElement.textContent = message;
return testimonialElement;

}


function createTestimonialsUrl () {
    const url = new URL(API_BASE_URL);
    url.searchParams.set('limit', PAGE_SIZE);
    return url
   
   
} 

