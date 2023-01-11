import React from 'react';
import {Image, ScrollView, Text, TextInput, View} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from '../assets/styles/styles';

const Home = () => {
  return (
    <ScrollView style={[styles.flex, styles.bgWhite]}>
      <View style={[{backgroundColor: '#d9d9d9'}]}>
        <View style={[styles.m32, styles.row, styles.alignCenter]}>
          <View
            style={[
              styles.flex,
              styles.row,
              styles.alignCenter,
              styles.p8,
              styles.mr16,
              styles.br8,
              styles.bgWhite,
            ]}>
            <MaterialIcons name="search" size={24} />
            <TextInput
              style={[styles.flex, styles.py0, styles.fs16]}
              placeholder="Search"
              placeholderTextColor={styles.black.color}
            />
          </View>
          <Ionicons name="chatbubble" size={24} color={styles.green.color} />
        </View>
        <View>
          <View
            style={[
              styles.row,
              styles.justifyBetween,
              styles.alignCenter,
              styles.px24,
            ]}>
            <Text style={[styles.fs16, styles.fw600, styles.black]}>
              Announcements
            </Text>
            <Text style={[styles.green, styles.underline]}>View All</Text>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[styles.px12, styles.py24]}>
          <View
            style={[
              styles.row,
              styles.alignCenter,
              styles.p16,
              styles.mx8,
              styles.br16,
              {backgroundColor: '#e1c8ae'},
            ]}>
            <View styles={[styles.p4]}>
              <MaterialIcons
                name="access-time"
                size={24}
                color={styles.green.color}
                style={[
                  styles.red,
                  styles.br4,
                  styles.mr16,
                  styles.p8,
                  {color: '#fd8f0d', backgroundColor: '#fede67'},
                ]}
              />
            </View>
            <View>
              <Text style={[styles.black]}>
                Employees Are Expected To Clock...
              </Text>
              <Text style={[styles.grey]}>1 hour ago</Text>
            </View>
          </View>

          <View
            style={[
              styles.row,
              styles.alignCenter,
              styles.p16,
              styles.mx8,
              styles.br16,
              {backgroundColor: '#e1aeae'},
            ]}>
            <View styles={[styles.p4]}>
              <MaterialIcons
                name="access-time"
                size={24}
                color={styles.green.color}
                style={[
                  styles.red,
                  styles.br4,
                  styles.mr16,
                  styles.p8,
                  {color: '#ff0000', backgroundColor: '#ffa589'},
                ]}
              />
            </View>
            <View>
              <Text style={[styles.black]}>
                Employees Are Expected To Clock...
              </Text>
              <Text style={[styles.grey]}>1 hour ago</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={[styles.pt4, styles.bgWhite]}></View>

      <View
        style={[
          {
            backgroundColor: '#d9d9d9',
            borderBottomLeftRadius: 32,
            borderBottomRightRadius: 32,
          },
        ]}>
        <View style={[styles.pt8, styles.placeCenter]}>
          <Text style={[styles.fs28, styles.fw700, {color: '#f8b17c'}]}>
            Welcome
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[styles.p12]}>
          <View
            style={[
              styles.p16,
              styles.m8,
              styles.alignCenter,
              styles.bw,
              styles.br24,
              {backgroundColor: '#fff9e8', borderColor: '#ede2be'},
            ]}>
            <View
              style={[
                styles.p12,
                styles.rounded,
                {backgroundColor: '#ffe79f'},
              ]}>
              <Image
                source={{
                  uri: 'https://source.unsplash.com/random/300x300/?profile+picture',
                }}
                height={40}
                width={40}
                style={[styles.rounded, {width: 40, height: 40}]}
              />
            </View>
            <Text
              style={[
                styles.fs16,
                styles.px8,
                styles.mt8,
                styles.fw700,
                {color: '#c8a230'},
              ]}>
              Sahil
            </Text>
            <Text style={[styles.fs14, styles.px8]}>UX Designer</Text>
            <Text style={[styles.fs14, styles.px8]}>Joined today</Text>
          </View>

          <View
            style={[
              styles.p16,
              styles.m8,
              styles.alignCenter,
              styles.bw,
              styles.br24,
              {backgroundColor: '#e9f8ff', borderColor: '#a9e0f9'},
            ]}>
            <View
              style={[
                styles.p12,
                styles.rounded,
                {backgroundColor: '#c8ecfd'},
              ]}>
              <Image
                source={{
                  uri: 'https://source.unsplash.com/random/300x300/?profile+picture+',
                }}
                height={40}
                width={40}
                style={[styles.rounded, {width: 40, height: 40}]}
              />
            </View>
            <Text
              style={[
                styles.fs16,
                styles.px8,
                styles.mt8,
                styles.fw700,
                {color: '#2b7da4'},
              ]}>
              Megha
            </Text>
            <Text style={[styles.fs14, styles.px8]}>UX Designer</Text>
            <Text style={[styles.fs14, styles.px8]}>Joined today</Text>
          </View>

          <View
            style={[
              styles.p16,
              styles.m8,
              styles.alignCenter,
              styles.bw,
              styles.br24,
              {backgroundColor: '#ffebef', borderColor: '#ffc7d4'},
            ]}>
            <View
              style={[
                styles.p12,
                styles.rounded,
                {backgroundColor: '#ffc7d4'},
              ]}>
              <Image
                source={{
                  uri: 'https://source.unsplash.com/random/300x300/?profile+picture++',
                }}
                height={40}
                width={40}
                style={[styles.rounded, {width: 40, height: 40}]}
              />
            </View>
            <Text
              style={[
                styles.fs16,
                styles.px8,
                styles.mt8,
                styles.fw700,
                {color: '#2b7da4'},
              ]}>
              Ravi
            </Text>
            <Text style={[styles.fs14, styles.px8]}>UX Designer</Text>
            <Text style={[styles.fs14, styles.px8]}>Joined today</Text>
          </View>
        </ScrollView>
      </View>

      <View
        style={[
          styles.row,
          styles.alignCenter,
          styles.br16,
          styles.p16,
          styles.m16,
          {backgroundColor: '#e9f8ff'},
        ]}>
        <MaterialIcons
          name="access-time"
          size={24}
          color="#fff"
          style={[
            styles.rounded,
            styles.mr16,
            styles.p8,
            {backgroundColor: '#0089c8'},
          ]}
        />
        <View style={[styles.flex]}>
          <Text style={[styles.fs14, styles.black]}>03/01/23</Text>
          <Text style={[styles.fs12, styles.black]}>Clock In-hh:mm AM</Text>
          <Text style={[styles.fs12, styles.black]}>Clock Out-hh:mm PM</Text>
        </View>
        <Text
          style={[
            styles.px16,
            styles.py4,
            styles.br8,
            styles.white,
            {backgroundColor: '#0089c8'},
          ]}>
          Clock In
        </Text>
        <MaterialIcons name="keyboard-arrow-right" size={32} color="#637381" />
      </View>

      <View
        style={[
          styles.m8,
          styles.bgWhite,
          styles.elevate5,
          styles.px16,
          styles.br16,
        ]}>
        <View style={[styles.row, styles.alignCenter, styles.py8]}>
          <View
            style={[styles.p12, styles.rounded, {backgroundColor: '#ffe79f'}]}>
            <Image
              source={{
                uri: 'https://source.unsplash.com/random/300x300/?profile+picture',
              }}
              height={40}
              width={40}
              style={[styles.rounded, {width: 40, height: 40}]}
            />
          </View>
          <Text
            style={[
              styles.fw600,
              styles.fs16,
              styles.flex,
              styles.pl16,
              styles.black,
            ]}>
            Rashmi
          </Text>
          <Text style={[styles.flex, styles.fs16, styles.pl16, styles.grey]}>
            Trainee
          </Text>
          <View
            style={[styles.flex, styles.pl8, styles.row, styles.alignCenter]}>
            <View
              style={[
                styles.p4,
                styles.bgGreen,
                styles.rounded,
                styles.mr8,
              ]}></View>
            <Text style={[styles.fw600, styles.fs16, styles.grey]}>
              Present
            </Text>
          </View>
        </View>
        <View style={[styles.row, styles.alignCenter, styles.py8]}>
          <View
            style={[styles.p12, styles.rounded, {backgroundColor: '#ffe79f'}]}>
            <Image
              source={{
                uri: 'https://source.unsplash.com/random/300x300/?profile+picture',
              }}
              height={40}
              width={40}
              style={[styles.rounded, {width: 40, height: 40}]}
            />
          </View>
          <Text
            style={[
              styles.fw600,
              styles.fs16,
              styles.flex,
              styles.pl16,
              styles.black,
            ]}>
            Manisha
          </Text>
          <Text style={[styles.flex, styles.fs16, styles.pl16, styles.grey]}>
            Hr
          </Text>
          <View
            style={[styles.flex, styles.pl8, styles.row, styles.alignCenter]}>
            <View
              style={[
                styles.p4,
                styles.bgGreen,
                styles.rounded,
                styles.mr8,
              ]}></View>
            <Text style={[styles.fw600, styles.fs16, styles.grey]}>
              Present
            </Text>
          </View>
        </View>
        <View style={[styles.row, styles.alignCenter, styles.py8]}>
          <View
            style={[styles.p12, styles.rounded, {backgroundColor: '#ffe79f'}]}>
            <Image
              source={{
                uri: 'https://source.unsplash.com/random/300x300/?profile+picture',
              }}
              height={40}
              width={40}
              style={[styles.rounded, {width: 40, height: 40}]}
            />
          </View>
          <Text
            style={[
              styles.fw600,
              styles.fs16,
              styles.flex,
              styles.pl16,
              styles.black,
            ]}>
            Abhishek
          </Text>
          <Text style={[styles.flex, styles.fs16, styles.pl16, styles.grey]}>
            Hr
          </Text>
          <View
            style={[styles.flex, styles.pl8, styles.row, styles.alignCenter]}>
            <View
              style={[
                styles.p4,
                styles.bgGreen,
                styles.rounded,
                styles.mr8,
              ]}></View>
            <Text style={[styles.fw600, styles.fs16, styles.grey]}>
              Present
            </Text>
          </View>
        </View>
        <View style={[styles.row, styles.alignCenter, styles.py8]}>
          <View
            style={[styles.p12, styles.rounded, {backgroundColor: '#ffe79f'}]}>
            <Image
              source={{
                uri: 'https://source.unsplash.com/random/300x300/?profile+picture',
              }}
              height={40}
              width={40}
              style={[styles.rounded, {width: 40, height: 40}]}
            />
          </View>
          <Text
            style={[
              styles.fw600,
              styles.fs16,
              styles.flex,
              styles.pl16,
              styles.black,
            ]}>
            Aditya
          </Text>
          <Text style={[styles.flex, styles.fs16, styles.pl16, styles.grey]}>
            Trainee
          </Text>
          <View
            style={[styles.flex, styles.pl8, styles.row, styles.alignCenter]}>
            <View
              style={[
                styles.p4,
                styles.bgGreen,
                styles.rounded,
                styles.mr8,
              ]}></View>
            <Text style={[styles.fw600, styles.fs16, styles.grey]}>
              Present
            </Text>
          </View>
        </View>
      </View>

      <View
        style={[
          styles.m8,
          styles.bgWhite,
          styles.elevate5,
          styles.px16,
          styles.py16,
          styles.br16,
        ]}>
        <Text style={[styles.black, styles.fw700, styles.mb16, styles.fs16]}>
          Quick Links
        </Text>

        <View style={[styles.row]}>
          <View
            style={[
              styles.flex,
              styles.row,
              styles.justifyBetween,
              styles.br4,
              {backgroundColor: '#def6fa'},
            ]}>
            <Text style={[styles.p8, styles.darkGrey, styles.fs16]}>
              Holiday Calendar
            </Text>
            <MaterialIcons
              name="arrow-forward"
              size={24}
              color="grey"
              style={{transform: [{rotate: '-45deg'}]}}
            />
          </View>
          <View
            style={[
              styles.flex,
              styles.row,
              styles.justifyBetween,
              styles.mx8,
              styles.br4,
              {backgroundColor: '#def6fa'},
            ]}>
            <Text style={[styles.p8, styles.darkGrey, styles.fs16]}>
              Leave Policy
            </Text>
            <MaterialIcons
              name="arrow-forward"
              size={24}
              color="grey"
              style={{transform: [{rotate: '-45deg'}]}}
            />
          </View>
          <View
            style={[
              styles.flex,
              styles.row,
              styles.justifyBetween,
              styles.br4,
              {backgroundColor: '#def6fa'},
            ]}>
            <Text style={[styles.p8, styles.darkGrey, styles.fs16]}>
              Payroll Manual
            </Text>
            <MaterialIcons
              name="arrow-forward"
              size={24}
              color="grey"
              style={{transform: [{rotate: '-45deg'}]}}
            />
          </View>
        </View>
      </View>

      <View
        style={[
          styles.m8,
          styles.bgWhite,
          styles.elevate5,
          styles.px16,
          styles.py16,
          styles.br16,
        ]}>
        <Text style={[styles.black, styles.fw700, styles.mb16, styles.fs16]}>
          Celebrations
        </Text>

        <View>
          <View
            style={[
              styles.row,
              styles.alignCenter,
              styles.justifyBetween,
              styles.px16,
              styles.py8,
              styles.my16,
              styles.br16,
              {backgroundColor: '#c1f1ca'},
            ]}>
            <Text style={[styles.darkGrey, styles.fs14]}>Birthday</Text>
            <View style={[styles.flex, styles.placeCenter]}>
              <View
                style={[
                  styles.p12,
                  styles.rounded,
                  {backgroundColor: '#c1f1ca', margin: -16},
                ]}>
                <Image
                  source={{
                    uri: 'https://source.unsplash.com/random/300x300/?profile+picture',
                  }}
                  height={40}
                  width={40}
                  style={[styles.rounded, {width: 40, height: 40}]}
                />
              </View>
            </View>
            <Text style={[styles.fs20, styles.flex, {color: '#069521'}]}>
              Shubham
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={32}
              color="#637381"
            />
          </View>

          <View
            style={[
              styles.row,
              styles.alignCenter,
              styles.justifyBetween,
              styles.px16,
              styles.py8,
              styles.my16,
              styles.br16,
              {backgroundColor: '#c1f1ca'},
            ]}>
            <Text style={[styles.darkGrey, styles.fs14]}>Birthday</Text>
            <View style={[styles.flex, styles.placeCenter]}>
              <View
                style={[
                  styles.p12,
                  styles.rounded,
                  {backgroundColor: '#c1f1ca', margin: -16},
                ]}>
                <Image
                  source={{
                    uri: 'https://source.unsplash.com/random/300x300/?profile+picture',
                  }}
                  height={40}
                  width={40}
                  style={[styles.rounded, {width: 40, height: 40}]}
                />
              </View>
            </View>
            <Text style={[styles.fs20, styles.flex, {color: '#069521'}]}>
              Shubham
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={32}
              color="#637381"
            />
          </View>

          <View
            style={[
              styles.row,
              styles.alignCenter,
              styles.justifyBetween,
              styles.px16,
              styles.py8,
              styles.my16,
              styles.br16,
              {backgroundColor: '#c1f1ca'},
            ]}>
            <Text style={[styles.darkGrey, styles.fs14]}>Birthday</Text>
            <View style={[styles.flex, styles.placeCenter]}>
              <View
                style={[
                  styles.p12,
                  styles.rounded,
                  {backgroundColor: '#c1f1ca', margin: -16},
                ]}>
                <Image
                  source={{
                    uri: 'https://source.unsplash.com/random/300x300/?profile+picture',
                  }}
                  height={40}
                  width={40}
                  style={[styles.rounded, {width: 40, height: 40}]}
                />
              </View>
            </View>
            <Text style={[styles.fs20, styles.flex, {color: '#069521'}]}>
              Shubham
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={32}
              color="#637381"
            />
          </View>

          <View
            style={[
              styles.row,
              styles.alignCenter,
              styles.justifyBetween,
              styles.px16,
              styles.py8,
              styles.my16,
              styles.br16,
              {backgroundColor: '#c1f1ca'},
            ]}>
            <Text style={[styles.darkGrey, styles.fs14]}>Birthday</Text>
            <View style={[styles.flex, styles.placeCenter]}>
              <View
                style={[
                  styles.p12,
                  styles.rounded,
                  {backgroundColor: '#c1f1ca', margin: -16},
                ]}>
                <Image
                  source={{
                    uri: 'https://source.unsplash.com/random/300x300/?profile+picture',
                  }}
                  height={40}
                  width={40}
                  style={[styles.rounded, {width: 40, height: 40}]}
                />
              </View>
            </View>
            <Text style={[styles.fs20, styles.flex, {color: '#069521'}]}>
              Shubham
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={32}
              color="#637381"
            />
          </View>
        </View>
      </View>

      <View
        style={[
          styles.m8,
          styles.bgWhite,
          styles.elevate5,
          styles.px16,
          styles.py16,
          styles.br16,
        ]}>
        <Text style={[styles.black, styles.fw700, styles.mb16, styles.fs16]}>
          My Tasks
        </Text>

        <View>
          <View
            style={[
              styles.row,
              styles.alignCenter,
              styles.bw,
              styles.px16,
              styles.py12,
              styles.my8,
              styles.br16,
              {borderColor: 'grey'},
            ]}>
            <Text style={[styles.fs16, styles.flex, styles.black]}>
              Attendance
            </Text>
            <Text style={[styles.fs16, styles.mx16, styles.black]}>17</Text>
            <Text
              style={[
                styles.fs16,
                styles.mx16,
                styles.green,
                styles.underline,
              ]}>
              View
            </Text>
          </View>
          <View
            style={[
              styles.row,
              styles.alignCenter,
              styles.bw,
              styles.px16,
              styles.py12,
              styles.my8,
              styles.br16,
              {borderColor: 'grey'},
            ]}>
            <Text style={[styles.fs16, styles.flex, styles.black]}>Leave</Text>
            <Text style={[styles.fs16, styles.mx16, styles.black]}>8</Text>
            <Text
              style={[
                styles.fs16,
                styles.mx16,
                styles.green,
                styles.underline,
              ]}>
              View
            </Text>
          </View>
          <View
            style={[
              styles.row,
              styles.alignCenter,
              styles.bw,
              styles.px16,
              styles.py12,
              styles.my8,
              styles.br16,
              {borderColor: 'grey'},
            ]}>
            <Text style={[styles.fs16, styles.flex, styles.black]}>
              Job Offers
            </Text>
            <Text style={[styles.fs16, styles.mx16, styles.black]}>11</Text>
            <Text
              style={[
                styles.fs16,
                styles.mx16,
                styles.green,
                styles.underline,
              ]}>
              View
            </Text>
          </View>
          <View
            style={[
              styles.row,
              styles.alignCenter,
              styles.bw,
              styles.px16,
              styles.py12,
              styles.my8,
              styles.br16,
              {borderColor: 'grey'},
            ]}>
            <Text style={[styles.fs16, styles.flex, styles.black]}>
              Interview Schedule
            </Text>
            <Text style={[styles.fs16, styles.mx16, styles.black]}>4</Text>
            <Text
              style={[
                styles.fs16,
                styles.mx16,
                styles.green,
                styles.underline,
              ]}>
              View
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
