import {XIcon} from "lucide-react";

interface ImageViewOverlayProps {
	imageUrl: string;
	setSelectedImage: (state: string) => void;
}

export default function ImageViewOverlay({imageUrl, setSelectedImage}: ImageViewOverlayProps) {
	return (
		<div
			className={'fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center'}>
			<div onClick={() => setSelectedImage('')}
				 className={'absolute cursor-pointer flex top-0 right-0 p-2 m-2 bg-white/20 rounded-2xl'}>
				<XIcon className={'text-white'}/>
				<h2 className={'text-white'}>Close</h2>
			</div>
			<img alt={'image'} src={imageUrl}/>
		</div>
	)
}
