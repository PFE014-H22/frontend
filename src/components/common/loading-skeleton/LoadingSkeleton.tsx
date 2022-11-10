import { ReactNode } from 'react';
import { UrlObject } from 'url';
import Skeleton from '@mui/material/Skeleton';
import styles from './LoadingSkeleton.module.scss';

/**
 * The props used to configure the LoadingSkeleton component.
 */
export interface LoadingSkeletonProps {
	/**
	 * Width of a single loading skeleton.
	 */
    skeletonWidth?: number | string;

    /**
	 * Height of a single loading skeleton.
	 */
    skeletonHeight?: number | string;
}

/**
 * Component used to show that data is loading.
 */
const LoadingSkeleton = ({ 
    skeletonWidth = '100%', 
    skeletonHeight = 140 
}: LoadingSkeletonProps) => {
	return (
        <div className={styles.loading_skeleton}>
            <Skeleton variant="rounded" animation="wave" width={skeletonWidth} height={skeletonHeight} 
                sx={{
                    borderRadius: '1rem',
                }}
            />
        </div>
	);
};

export default LoadingSkeleton;
