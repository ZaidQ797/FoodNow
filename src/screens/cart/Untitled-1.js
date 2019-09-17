import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Slider,
    Dimensions,
    SafeAreaView
} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import PropTypes from 'prop-types'; // ES6
import {CheckBox} from 'react-native-elements'
import Modal from "react-native-modal";
import {colors} from "../../../utils/theme";
import {Rating} from 'react-native-elements';


const screenWidth = Dimensions.get('window').width


class Filter extends Component {

    constructor(props){
        super(props)
        this.selectedItems=[]
    }


    state = {
        sliderValue: 0,
        diettagsArray: [
            {id: 0, checked: false, label: "Sugarfree", availableItems: 115},
            {id: 1, checked: false, label: "Youth", availableItems: 11},
            {id: 2, checked: false, label: "Metabolites", availableItems: 10},
            {id: 3, checked: false, label: "Fodmap", availableItems: 7},
        ],
        allegensArray: [
            {id: 0, checked: false, label: "Sugarfree", availableItems: 115},
            {id: 1, checked: false, label: "Youth", availableItems: 11},
            {id: 2, checked: false, label: "Metabolites", availableItems: 10},
            {id: 3, checked: false, label: "Fodmap", availableItems: 7},
        ],
        envoinmentArray: [
            {id: 0, checked: false, label: "Sugarfree", availableItems: 115},
            {id: 1, checked: false, label: "Youth", availableItems: 11},
            {id: 2, checked: false, label: "Metabolites", availableItems: 10},
            {id: 3, checked: false, label: "Fodmap", availableItems: 7},
        ],
        cousineArray: [
            {id: 0, checked: false, label: "Sugarfree", availableItems: 115},
            {id: 1, checked: false, label: "Youth", availableItems: 11},
            {id: 2, checked: false, label: "Metabolites", availableItems: 10},
            {id: 3, checked: false, label: "Fodmap", availableItems: 7},
        ],
        servicesArray: [
            {id: 0, checked: false, label: "Sugarfree", availableItems: 115},
            {id: 1, checked: false, label: "Youth", availableItems: 11},
            {id: 2, checked: false, label: "Metabolites", availableItems: 10},
            {id: 3, checked: false, label: "Fodmap", availableItems: 7},
        ]
    };

    handleValueChange = (id, num) => {
        let stateArray;
        switch (num) {
            case 1: {
                let changedCheckbox = this.state.diettagsArray.find((cb) => cb.id === id);
                changedCheckbox.checked = !changedCheckbox.checked;
                let chkboxes = this.state.diettagsArray;
                for (let i = 0; i < chkboxes.length; i++) {
                    if (chkboxes[i].id === id) {
                        chkboxes.splice(i, 1, changedCheckbox);
                    }
                }
                this.setState({diettagsArray: chkboxes,});
                break;
            }
            case 2:
            {
                let changedCheckbox = this.state.allegensArray.find((cb) => cb.id === id);
                changedCheckbox.checked = !changedCheckbox.checked;
                let chkboxes = this.state.allegensArray;
                for (let i = 0; i < chkboxes.length; i++) {
                    if (chkboxes[i].id === id) {
                        chkboxes.splice(i, 1, changedCheckbox);
                    }
                }
                this.setState({allegensArray: chkboxes,});
                break;
            }
            case 3:
            {
                let changedCheckbox = this.state.cousineArray.find((cb) => cb.id === id);
                changedCheckbox.checked = !changedCheckbox.checked;
                let chkboxes = this.state.cousineArray;
                for (let i = 0; i < chkboxes.length; i++) {
                    if (chkboxes[i].id === id) {
                        chkboxes.splice(i, 1, changedCheckbox);
                    }
                }
                this.setState({cousineArray: chkboxes,});
                break;
            }
            case 4:
            {
                let changedCheckbox = this.state.envoinmentArray.find((cb) => cb.id === id);
                changedCheckbox.checked = !changedCheckbox.checked;
                let chkboxes = this.state.envoinmentArray;
                for (let i = 0; i < chkboxes.length; i++) {
                    if (chkboxes[i].id === id) {
                        chkboxes.splice(i, 1, changedCheckbox);
                    }
                }
                this.setState({envoinmentArray: chkboxes,});
                break;
            }
            case 5:
            {
                let changedCheckbox = this.state.servicesArray.find((cb) => cb.id === id);
                changedCheckbox.checked = !changedCheckbox.checked;
                let chkboxes = this.state.servicesArray;
                for (let i = 0; i < chkboxes.length; i++) {
                    if (chkboxes[i].id === id) {
                        chkboxes.splice(i, 1, changedCheckbox);
                    }
                }
                this.setState({servicesArray: chkboxes,});
                break;
            }
            default:
                return
        }

    };

    handleApply = () => {
        this.state.diettagsArray.filter((item) => {
            if(item.checked===true){
                this.selectedItems.push(item)
            }
        });
        this.state.allegensArray.filter((item) => {
            if(item.checked===true){
                this.selectedItems.push(item)
            }
        })

        this.state.envoinmentArray.filter((item) => {
            if(item.checked===true){
                this.selectedItems.push(item)
            }
        });
        this.state.cousineArray.filter((item) => {
            if(item.checked===true){
                this.selectedItems.push(item)
            }
        })

        this.state.servicesArray.filter((item) => {
            if(item.checked===true){
                this.selectedItems.push(item)
            }
        });

        alert(this.selectedItems)
    };

    renderHeader = () => {
        return (
            <View
                style={styles.header}>
                <TouchableOpacity
                    onPress={this.props.toggleModal}
                    style={{alignItems: 'flex-end'}}>
                    <Entypo name={'cross'} size={35} color={'red'} style={{right: 10, top: 10}}/>
                </TouchableOpacity>
            </View>
        )
    }

    renderFilterOptions = () => {
        return (
            <View style={styles.filterOptions}>
                <ScrollView
                    contentContainerStyle={{flexGrow: 1}}
                    automaticallyAdjustContentInsets={false}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.sliderContainer}>
                        <Text style={styles.sliderLabel}>Price Range:</Text>
                        <Text style={{
                            marginLeft: 20,
                            fontSize: 19,
                            marginTop: 5,
                            width: 50,
                            textAlign: 'center',
                            left: this.state.sliderValue * (screenWidth - 60) / 10 - 15,
                        }}
                        >€{Math.floor(this.state.sliderValue)}</Text>
                        <Slider
                            maximumValue={10}
                            minimumValue={0}
                            style={styles.slider}
                            thumbTintColor={colors.red}
                            minimumTrackTintColor={colors.red}
                            maximumTrackTintColor={colors.colorPrimary}
                            step={1}
                            value={this.state.sliderValue}
                            onValueChange={(sliderValue) => this.setState({sliderValue})}
                        />
                    </View>
                    <View style={styles.sliderContainer}>
                        <Text style={styles.sliderLabel}>Ratings:</Text>
                        <Rating
                            imageSize={25}
                            readonly
                            style={{top: 10}}
                            startingValue={0}
                        />
                    </View>
                    <View style={styles.sliderContainer}>
                        <Text style={styles.sliderLabel}>Diettags:</Text>
                        {
                            this.state.diettagsArray.map((item) => {
                                return (
                                    <View style={styles.checkBoxContainer}>
                                        <Text style={{fontSize: 16}}>{item.label}
                                            <Text style={{color: colors.red}}>({item.availableItems})</Text>
                                        </Text>
                                        <CheckBox checked={item.checked}
                                                  onPress={() => this.handleValueChange(item.id, 1)}
                                        />
                                    </View>
                                )

                            })
                        }
                    </View>
                    <View style={styles.sliderContainer}>
                        <Text style={styles.sliderLabel}>Allergens:</Text>
                        {
                            this.state.allegensArray.map((item) => {
                                return (
                                    <View style={styles.checkBoxContainer}>
                                        <Text style={{fontSize: 16}}>{item.label}
                                            <Text style={{color: colors.red}}>({item.availableItems})</Text>
                                        </Text>
                                        <CheckBox checked={item.checked}
                                                  onPress={() => this.handleValueChange(item.id, 2)}
                                        />
                                    </View>
                                )

                            })
                        }
                    </View>
                    <View style={styles.sliderContainer}>
                        <Text style={styles.sliderLabel}>Environments:</Text>
                        {
                            this.state.cousineArray.map((item) => {
                                return (
                                    <View style={styles.checkBoxContainer}>
                                        <Text style={{fontSize: 16}}>{item.label}
                                            <Text style={{color: colors.red}}>({item.availableItems})</Text>
                                        </Text>
                                        <CheckBox checked={item.checked}
                                                  onPress={() => this.handleValueChange(item.id, 3)}
                                        />
                                    </View>
                                )

                            })
                        }
                    </View>
                    <View style={styles.sliderContainer}>
                        <Text style={styles.sliderLabel}>Cuisine:</Text>
                        {
                            this.state.envoinmentArray.map((item) => {
                                return (
                                    <View style={styles.checkBoxContainer}>
                                        <Text style={{fontSize: 16}}>{item.label}
                                            <Text style={{color: colors.red}}>({item.availableItems})</Text>
                                        </Text>
                                        <CheckBox checked={item.checked}
                                                  onPress={() => this.handleValueChange(item.id, 4)}
                                        />
                                    </View>
                                )

                            })
                        }
                    </View>
                    <View style={styles.sliderContainer}>
                        <Text style={styles.sliderLabel}>Services:</Text>
                        {
                            this.state.servicesArray.map((item) => {
                                return (
                                    <View style={styles.checkBoxContainer}>
                                        <Text style={{fontSize: 16}}>{item.label}
                                            <Text style={{color: colors.red}}>({item.availableItems})</Text>
                                        </Text>
                                        <CheckBox checked={item.checked}
                                                  onPress={() => this.handleValueChange(item.id, 5)}
                                        />
                                    </View>
                                )

                            })
                        }
                    </View>
                </ScrollView>
            </View>
        )
    };

    renderFooter = () => {
        return (
            <View
                style={styles.footer}>
                <TouchableOpacity
                    onPress={() => this.handleApply()}
                    style={styles.searchBtn}
                    activeOpacity={0.6}>
                    <Text style={styles.searchBtnText}>Apply</Text>
                </TouchableOpacity>
            </View>
        )
    };

    render() {
        const {visible, navigation} = this.props;
        return (
            <Modal
                isVisible={visible}
                style={{margin: 0, padding: 0, paddingBottom: 0, height: '80%'}}>
                <SafeAreaView
                    style={{flex: 1,}}
                >
                    {this.renderHeader()}
                    {this.renderFilterOptions()}
                    {this.renderFooter()}
                </SafeAreaView>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        flex: 0.1,
    },
    filterOptions: {
        flexGrow: 1,
        backgroundColor: 'white',
        flex: 0.9
    },
    footer: {
        backgroundColor: 'white',
        flex: 0.1,
        marginBottom: 5
    },
    searchBtn: {
        width: '100%',
        backgroundColor: colors.red,
        borderWidth: 1,
        height: 50,
        borderColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBtnText: {
        fontSize: 20,
        color: colors.white,
        fontWeight: '600'
    },
    sliderContainer: {
        flexDirection: 'column',
    },
    slider: {
        marginLeft: 20,
        marginRight: 20
    },
    sliderLabel: {
        marginLeft: 20,
        fontSize: 18,
        marginTop: 10,
        color: 'black',
        fontWeight: '700'
    },
    checkBoxContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
    }
});

Filter.propTypes = {
    visible: PropTypes.bool.isRequired,
    backdropBackground: PropTypes.string
};


export default Filter