import * as ImagePicker from "expo-image-picker";
import {Image, View} from "@gluestack-ui/themed";
import React from "react";

function getImageRows(images: any[], size: number) {
    return Array.from({length: Math.ceil(images.length / size)}, (v, i) =>
        images.slice(i * size, i * size + size)
    );
}

export const ImageGridPreview = ({images, size}: { images: ImagePicker.ImagePickerAsset[], size: number }) => {
    const imageRows = getImageRows(images, size);

    return (
        <View style={{flexDirection: 'column'}}>
            {imageRows.map((row, rowIndex) => (
                <View key={rowIndex} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    {row.map((item, index) => (
                        <View key={index} style={{padding: 8, width: '25%'}}>
                            <Image
                                source={{uri: item.uri}}
                                style={{width: '100%', aspectRatio: 1, borderRadius: 10}}
                            />
                        </View>
                    ))}
                </View>
            ))}
        </View>
    );
}

export const ImageGrid = ({images, size}: { images: { id: string, url: string }[], size: number }) => {
    const imageRows = getImageRows(images, size);
    return (
        <View style={{flexDirection: 'column'}}>
            {imageRows.map((row, rowIndex) => (
                <View key={rowIndex} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    {row.map((item, index) => (
                        <View key={index} style={{padding: 8, width: '25%'}}>
                            <Image
                                alt={'Image of the variation'}
                                source={{uri: item.url}}
                                style={{width: '100%', aspectRatio: 1, borderRadius: 10}}
                            />
                        </View>
                    ))}
                </View>
            ))}
        </View>
    );
}