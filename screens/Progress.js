import { View, Text } from 'react-native';
import React, { useState } from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
const Progress = () => {
  const [value, setvalue] = useState(0);
  return (
    <View>
      <Text>Progress</Text>
      <CircularProgress
        value={100}
        radius={90}
        duration={1500}
        // progressValueColor={'#ecf0f1'}
        maxValue={200}
        title={'KM/H'}
        titleColor="#222"
        titleFontSize={20}
        valueSuffix="%"
        inActiveStrokeColor="#2ecc71"
        inActiveStrokeOpacity={0.2}
        //titleStyle={{ fontWeight: 'bold' }}
      />
    </View>
  );
};

export default Progress;
