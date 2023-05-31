import { Icon, useColorModeValue } from '@chakra-ui/react';
import { IconProp } from './icons.props';

const OnlineStudent = ({ ...props }: IconProp) => {
    return (
        <Icon
            width='50'
            height='50'
            viewBox='0 0 50 50'
            fill={useColorModeValue('gray.700', 'gray.200')}
            {...props}
            xmlns='http://www.w3.org/2000/svg'
        >
            <g clipPath='url(#clip0_200_7247)'>
                <path d='M48.5352 47.0703H42.0898V32.7148C42.0898 31.0994 40.7756 29.7852 39.1602 29.7852H36.9822C36.4083 27.2813 35.2658 25.1315 33.6366 23.5165C32.6112 22.5 31.419 21.7232 30.0969 21.2007C32.9308 18.7556 34.7803 14.5286 34.7803 10.7096C34.7803 7.24395 33.8162 4.52393 31.9149 2.62539C30.1951 0.907813 27.804 0 25 0C22.1961 0 19.8049 0.907813 18.085 2.62539C16.1837 4.52393 15.2196 7.24395 15.2196 10.7096C15.2196 14.5285 17.0691 18.7556 19.903 21.2007C18.581 21.7232 17.3888 22.5 16.3634 23.5165C14.7342 25.1315 13.5917 27.2814 13.0179 29.7852H10.8398C9.22441 29.7852 7.91016 31.0994 7.91016 32.7148V47.0703H1.46484C0.655859 47.0703 0 47.7262 0 48.5352C0 49.3441 0.655859 50 1.46484 50H48.5352C49.3441 50 50 49.3441 50 48.5352C50 47.7262 49.3441 47.0703 48.5352 47.0703ZM25 2.92969C27.1514 2.92969 30.5279 3.64482 31.5484 7.89658C30.0555 7.70674 29.2029 7.28496 28.5356 6.95479C27.8815 6.63115 27.1401 6.26426 26.2354 6.47168C25.5009 6.64004 24.9758 7.05439 24.4681 7.45518C23.5428 8.18555 22.1919 9.24941 18.2021 9.46484C18.6989 3.81416 22.6073 2.92969 25 2.92969ZM18.2969 12.3934C23.2722 12.1313 25.1305 10.6648 26.2833 9.75479C26.4502 9.62295 26.665 9.45352 26.798 9.37236C26.9156 9.42197 27.0892 9.50781 27.2364 9.58066C28.0972 10.0065 29.4486 10.6749 31.8469 10.871C31.8086 13.0279 31.0067 15.4202 29.6815 17.3051C28.3292 19.2287 26.6228 20.332 25 20.332C23.3772 20.332 21.6708 19.2287 20.3184 17.3051C19.2993 15.8556 18.5884 14.1055 18.2969 12.3934ZM24.2188 23.3398H25.7812C29.8465 23.3398 32.8119 25.7168 33.9625 29.7852H16.0375C17.1881 25.7168 20.1535 23.3398 24.2188 23.3398ZM10.8398 47.0703V32.7148H39.1602V47.0703H10.8398Z' />
                <path d='M25 40.5271C25.809 40.5271 26.4648 39.8713 26.4648 39.0623C26.4648 38.2532 25.809 37.5974 25 37.5974C24.191 37.5974 23.5352 38.2532 23.5352 39.0623C23.5352 39.8713 24.191 40.5271 25 40.5271Z' />
            </g>
            <defs>
                <clipPath id='clip0_200_7247'>
                    <rect width='50' height='50' fill='white' />
                </clipPath>
            </defs>
        </Icon>
    );
};

export default OnlineStudent;