import {Link} from 'react-router-dom'

import './Logo.scss'

export const Logo = () => {
    return (
        <div className="logo">
            <Link to='/'>
                <svg viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.311 11.6931C10.5394 11.6931 9.78595 11.6155 9.05808 11.4675C9.05955 11.5425 9.06029 11.6178 9.06029 11.6931C9.06029 15.3748 7.29223 18.6437 4.55889 20.6967C1.82554 18.6437 0.0574951 15.3748 0.0574951 11.6931C0.0574951 8.01141 1.82554 4.74263 4.55889 2.68953C6.43971 1.27677 8.77759 0.439636 11.311 0.439636C15.4764 0.439636 19.1132 2.7027 21.059 6.06635C19.1132 9.43007 15.4764 11.6931 11.311 11.6931ZM3.57447 6.06639C4.46163 7.28406 5.62824 8.28343 6.97955 8.9708C6.51989 7.41897 5.67695 6.03152 4.55889 4.91752C4.39829 5.07752 4.24337 5.24318 4.09445 5.41416C3.91197 5.62371 3.73845 5.84133 3.57447 6.06639ZM2.65042 7.62584C3.88747 9.11507 5.50131 10.2801 7.3457 10.9746C7.3633 11.2118 7.37225 11.4515 7.37225 11.6931C7.37225 14.3397 6.29866 16.7353 4.55889 18.4688C2.81912 16.7353 1.74552 14.3397 1.74552 11.6931C1.74552 10.2388 2.06968 8.86031 2.65042 7.62584ZM5.85928 3.83194C7.39817 5.40805 8.47816 7.4342 8.88332 9.69441C9.65865 9.8972 10.4723 10.0051 11.311 10.0051C14.4887 10.0051 17.3064 8.45621 19.0476 6.06635C17.3064 3.67652 14.4888 2.12766 11.311 2.12766C9.2857 2.12766 7.4066 2.75684 5.85928 3.83194Z" fill="black"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3137 11.6931C21.0837 11.6931 21.8357 11.7705 22.5623 11.9178C22.4426 18.0293 17.451 22.9466 11.3109 22.9466C10.5409 22.9466 9.78906 22.8693 9.0625 22.722C9.18217 16.6105 14.1737 11.6931 20.3137 11.6931ZM11.3109 21.2586C11.1726 21.2586 11.035 21.2557 10.8982 21.2498C11.6989 16.7766 15.61 13.3811 20.3137 13.3811C20.4521 13.3811 20.5897 13.3841 20.7264 13.3898C19.9259 17.8631 16.0148 21.2586 11.3109 21.2586Z" fill="black"></path>
                    <path d="M34.4584 17.641C35.7193 17.641 36.7467 17.3608 37.4471 16.8238C38.3111 16.17 38.8481 15.236 38.9882 14.1385C39.0349 13.8583 38.8715 13.6715 38.5912 13.6715H37.4004C37.1436 13.6715 36.9335 13.8116 36.8634 14.0685C36.7467 14.4655 36.5131 14.7924 36.1629 15.0725C35.7193 15.376 35.1355 15.5395 34.4584 15.5395C33.7812 15.5395 33.1741 15.3528 32.7539 15.0025C32.1001 14.4888 31.7965 13.6949 31.7965 12.4807C31.7965 12.3406 31.8899 12.2472 32.03 12.2472H38.6613C38.9182 12.2472 39.1283 12.037 39.1283 11.7802V10.3792C39.1283 8.81482 38.6613 7.53057 37.7974 6.68998C36.9802 5.8961 35.8594 5.49915 34.5051 5.49915C33.0808 5.49915 31.9366 5.91945 31.096 6.76003C30.092 7.78742 29.5549 9.44523 29.5549 11.5701C29.5549 13.9284 30.0686 15.4695 31.2361 16.5669C32.03 17.2907 33.1041 17.641 34.4584 17.641ZM32.0534 10.4493C31.9133 10.4493 31.8199 10.3559 31.8199 10.2158C31.8199 9.32851 32.0767 8.60465 32.5904 8.09097C33.0574 7.62397 33.7345 7.36713 34.5051 7.36713C35.2522 7.36713 35.8827 7.62397 36.3263 8.09097C36.84 8.60465 37.0969 9.32851 37.0969 10.2158C37.0969 10.3559 37.0035 10.4493 36.8634 10.4493H32.0534Z" fill="black"></path>
                    <path d="M46.2245 17.641C47.3686 17.641 48.4427 17.3141 49.1899 16.707C50.1006 15.9832 50.6142 14.8857 50.6142 13.6715C50.6142 13.368 50.4975 13.2046 50.264 13.2046H48.9331C48.6528 13.2046 48.4894 13.3447 48.4894 13.6015C48.4894 14.1619 48.2792 14.6756 47.859 15.0258C47.4387 15.3528 46.8549 15.5395 46.2245 15.5395C45.3138 15.5395 44.5433 15.2126 44.0763 14.6056C43.5626 13.9518 43.4926 12.9243 43.4926 11.5701C43.4926 9.93556 43.6093 9.11834 44.0997 8.46457C44.52 7.90417 45.3372 7.60062 46.2011 7.60062C46.8083 7.60062 47.3686 7.76407 47.7656 8.09097C48.2092 8.44121 48.466 8.97826 48.466 9.56203C48.466 9.77211 48.6528 9.93556 48.9097 9.93556H50.1473C50.3807 9.93556 50.5442 9.74883 50.5442 9.46859C50.5442 8.32449 50.0538 7.27373 49.26 6.54988C48.4894 5.87274 47.4153 5.49915 46.2011 5.49915C44.8702 5.49915 43.5626 5.94279 42.7454 6.78338C41.5779 7.99757 41.321 9.56203 41.321 11.5701C41.321 13.5081 41.5078 15.236 42.7921 16.4034C43.656 17.2441 44.8936 17.641 46.2245 17.641Z" fill="black"></path>
                    <path d="M57.2364 17.641C59.0576 17.641 60.412 16.8938 61.2058 15.7029C61.9998 14.5121 62.0698 13.2046 62.0698 11.5701C62.0698 9.93556 61.9998 8.62801 61.2058 7.43718C60.412 6.24634 59.0576 5.49915 57.2364 5.49915C55.4151 5.49915 54.0608 6.24634 53.2669 7.43718C52.473 8.62801 52.403 9.93556 52.403 11.5701C52.403 13.2046 52.473 14.5121 53.2669 15.7029C54.0608 16.8938 55.4151 17.641 57.2364 17.641ZM57.2364 15.5395C56.1857 15.5395 55.4618 15.0025 55.0882 14.4421C54.6679 13.8116 54.5745 12.9243 54.5745 11.5701C54.5745 10.2158 54.6679 9.32851 55.0882 8.6981C55.4618 8.13767 56.1857 7.60062 57.2364 7.60062C58.2871 7.60062 59.011 8.13767 59.3845 8.6981C59.8048 9.32851 59.8983 10.2158 59.8983 11.5701C59.8983 12.9243 59.8048 13.8116 59.3845 14.4421C59.011 15.0025 58.2871 15.5395 57.2364 15.5395Z" fill="black"></path>
                    <path d="M75.5166 17.641C77.3379 17.641 78.6922 16.8938 79.486 15.7029C80.28 14.5121 80.35 13.2046 80.35 11.5701C80.35 9.93556 80.28 8.62801 79.486 7.43718C78.6922 6.24634 77.3379 5.49915 75.5166 5.49915C73.6953 5.49915 72.341 6.24634 71.5472 7.43718C70.7532 8.62801 70.6832 9.93556 70.6832 11.5701C70.6832 13.2046 70.7532 14.5121 71.5472 15.7029C72.341 16.8938 73.6953 17.641 75.5166 17.641ZM75.5166 15.5395C74.4659 15.5395 73.742 15.0025 73.3684 14.4421C72.9481 13.8116 72.8547 12.9243 72.8547 11.5701C72.8547 10.2158 72.9481 9.32851 73.3684 8.6981C73.742 8.13767 74.4659 7.60062 75.5166 7.60062C76.5673 7.60062 77.2912 8.13767 77.6648 8.6981C78.085 9.32851 78.1785 10.2158 78.1785 11.5701C78.1785 12.9243 78.085 13.8116 77.6648 14.4421C77.2912 15.0025 76.5673 15.5395 75.5166 15.5395Z" fill="black"></path>
                    <path d="M84.5951 17.4075C84.8525 17.4075 85.0623 17.1974 85.0623 16.9405V11.3366C85.0623 8.86156 86.7205 7.92754 88.5648 7.92754H89.032C89.2886 7.92754 89.4984 7.7174 89.4984 7.46054V6.19966C89.4984 5.94281 89.2886 5.73267 89.032 5.73267H88.5648C86.0664 5.73267 85.6697 7.0169 85.1091 7.0169C84.7591 7.0169 84.7591 6.50321 84.6886 6.19966C84.6189 5.87276 84.4787 5.73267 84.2214 5.73267H83.4279C83.1713 5.73267 82.9607 5.94281 82.9607 6.19966V16.9405C82.9607 17.1974 83.1713 17.4075 83.4279 17.4075H84.5951Z" fill="black"></path>
                    <path d="M97.5082 18.108C97.5082 19.2988 96.5738 20.2095 95.3361 20.2095C94.1918 20.2095 93.4451 19.8592 93.2353 19.0419C93.1648 18.7851 93.0713 18.575 92.6279 18.575H91.5074C91.1803 18.575 91.0402 18.7618 91.0869 19.112C91.3672 21.0501 93.0484 22.311 95.3361 22.311C97.718 22.311 99.609 20.4663 99.609 18.108V6.19964C99.609 5.94279 99.3992 5.73265 99.1426 5.73265H98.3484C98.1853 5.73265 98.068 5.77934 98.0213 5.8961C97.8582 6.26969 97.741 6.38644 97.5549 6.38644C97.0639 6.38644 96.7139 5.49915 94.823 5.49915C93.0713 5.49915 91.6467 6.24634 91.0402 7.50723C90.55 8.51129 90.3164 9.77211 90.3164 11.4533C90.3164 13.3213 90.5262 14.4888 91.0631 15.4228C91.7402 16.6603 93.0713 17.4075 94.6361 17.4075C96.1771 17.4075 96.6672 16.6603 97.0877 16.6603C97.391 16.6603 97.5082 16.8705 97.5082 17.4075V18.108ZM95.0328 7.60062C96.0131 7.60062 96.8303 7.97422 97.2279 8.67474C97.6246 9.37523 97.6484 10.1457 97.6484 11.4533C97.6484 12.7609 97.6246 13.4614 97.2279 14.232C96.8541 14.9558 96.0131 15.306 95.0328 15.306C94.0525 15.306 93.2115 14.9558 92.8377 14.232C92.441 13.4614 92.418 12.7609 92.418 11.4533C92.418 10.1457 92.441 9.37523 92.8377 8.67474C93.2582 7.92752 94.0525 7.60062 95.0328 7.60062Z" fill="black"></path>
                    <path d="M66.3107 16.982C67.1167 16.982 67.77 16.3286 67.77 15.5226C67.77 14.7166 67.1167 14.0632 66.3107 14.0632C65.5047 14.0632 64.8513 14.7166 64.8513 15.5226C64.8513 16.3286 65.5047 16.982 66.3107 16.982Z" fill="black"></path>
                </svg>
            </Link>
        </div>
    )
}