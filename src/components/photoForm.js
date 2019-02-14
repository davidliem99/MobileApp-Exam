import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { photoUpdate } from '../actions';
import { CardSection,Input } from './common';

class PhotoForm extends Component {
    onPhotoChange = (text) => {
        this.props.photoUpdate('photo', text);
    }

    onCaptionChange = (text) => {
        this.props.photoUpdate('caption', text);
    }
    
    render() {
        return (
            <View>
                <CardSection>
                    <Input 
                        label="Link photo" 
                        placeholder="LINK"
                        value={this.props.photo}
                        onChangeText={this.onPhotoChange} 
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="caption" 
                        placeholder="your caption"
                        value={this.props.caption}
                        onChangeText={this.onCaptionChange} 
                    />
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { photo,caption } = state.photoForm;

    return {photo,caption };
};

export default connect(mapStateToProps, { photoUpdate })(PhotoForm);
