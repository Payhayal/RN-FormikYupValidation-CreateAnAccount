import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Formik} from 'formik';
import {Input, Button, Toggle} from '@ui-kitten/components';
import {HOME, TERMS} from './utils/routes';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';

const Form = () => {
  const navigation = useNavigation();
  const passwordRules =
    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';
  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name is too short!')
      .max(15, 'Name is too long!')
      .required('Required Field'),
    surname: Yup.string()
      .min(3, 'Last Name is too short!')
      .max(20, 'Last Name is too long!')
      .required('Required Field'),
    email: Yup.string()
      .email('Oops! Please make sure you enter a valid email address')
      .required('Required Field'),
    phone: Yup.string()
      .matches(/^[0-9]+$/, 'Phone must contain only digits')
      .min(11, 'Phone number must be at least 11 digits')
      .max(13, 'Phone number cannot exceed 13 digits')
      .required('Phone number is required'),
    password: Yup.string()
      .required('Required Field')
      .min(
        5,
        'Password should be at least 5 characters and should contain lowercase-uppercase letters, numbers and special symbols(!@#$%^&*)',
      )
      .matches(
        passwordRules,
        'The password should contain lowercase-uppercase letters, numbers and special symbols(!@#$%^&*)',
      ),
    passwordConfirm: Yup.string()
      .required('Required Field')
      .oneOf([Yup.ref('password')], 'Your password does not match!'),
    agreementConfirm: Yup.bool()
      .required('Required Field')
      .oneOf([true], 'Please make sure you confirm the terms!')
      .isTrue('You cannot continue without accepting the terms!'),
  });

  return (
    <View style={styles.topContainer}>
      <View style={styles.view}>
        <Text style={styles.text}>Create an Account</Text>
      </View>
      <View style={styles.container}>
        <ScrollView>
          <Formik
            initialValues={{
              name: '',
              surname: '',
              email: '',
              phone: '',
              password: '',
              passwordConfirm: '',
              birthDate: '',
              gender: '',
              agreementConfirm: false,
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              actions.resetForm(); // Formu sıfırla
              navigation.navigate(HOME);
              Alert.alert('You have successfully created an account!');
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              setFieldValue,
              errors,
              setTouched,
              touched,
            }) => (
              <View>
                <View>
                  <Input
                    caption={errors.name && touched.name ? errors.name : null}
                    status={errors.name && touched.name ? 'danger' : 'success'}
                    size="large"
                    onBlur={handleBlur('name')}
                    style={styles.input}
                    value={values.name}
                    placeholder="First Name"
                    label={'First Name :'}
                    onChangeText={handleChange('name')}
                    onFocus={() => setTouched({...touched, name: true})}
                  />
                </View>
                <View>
                  <Input
                    caption={
                      errors.surname && touched.surname ? errors.surname : null
                    }
                    status={
                      errors.surname && touched.surname ? 'danger' : 'success'
                    }
                    size="large"
                    onBlur={handleBlur('surname')}
                    style={styles.input}
                    value={values.surname}
                    placeholder="Last Name"
                    label={'Last Name :'}
                    onChangeText={handleChange('surname')}
                    onFocus={() => setTouched({...touched, surname: true})}
                  />
                </View>
                <View>
                  <Input
                    caption={
                      errors.email && touched.email ? errors.email : null
                    }
                    status={
                      errors.email && touched.email ? 'danger' : 'success'
                    }
                    size="large"
                    onBlur={handleBlur('email')}
                    style={styles.input}
                    value={values.email}
                    placeholder="E-mail"
                    label={'E-mail:'}
                    onChangeText={handleChange('email')}
                    onFocus={() => setTouched({...touched, email: true})}
                  />
                </View>
                <View>
                  <Input
                    caption={
                      errors.phone && touched.phone ? errors.phone : null
                    }
                    status={
                      errors.phone && touched.phone ? 'danger' : 'success'
                    }
                    onFocus={() => setTouched({...touched, phone: true})}
                    size="large"
                    onBlur={handleBlur('phone')}
                    style={styles.input}
                    value={values.phone}
                    placeholder="Phone Number"
                    label={'Phone Number :'}
                    onChangeText={handleChange('phone')}
                  />
                </View>
                <View>
                  <Input
                    secureTextEntry
                    caption={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                    status={
                      errors.password && touched.password ? 'danger' : 'success'
                    }
                    onFocus={() => setTouched({...touched, password: true})}
                    size="large"
                    onBlur={handleBlur('password')}
                    style={styles.input}
                    value={values.password}
                    placeholder="Password"
                    label={'Password :'}
                    onChangeText={handleChange('password')}
                  />
                </View>
                <View>
                  <Input
                    secureTextEntry
                    caption={
                      errors.passwordConfirm && touched.passwordConfirm
                        ? errors.passwordConfirm
                        : null
                    }
                    status={
                      errors.passwordConfirm && touched.passwordConfirm
                        ? 'danger'
                        : 'success'
                    }
                    onFocus={() =>
                      setTouched({...touched, passwordConfirm: true})
                    }
                    size="large"
                    onBlur={handleBlur('passwordConfirm')}
                    style={styles.input}
                    value={values.passwordConfirm}
                    placeholder="Password Confirmation"
                    label={'Password Confirmation :'}
                    onChangeText={handleChange('passwordConfirm')}
                  />
                </View>
                <View style={styles.toggleView}>
                  <View>
                    <Toggle
                      caption={
                        errors.agreementConfirm && touched.agreementConfirm
                          ? errors.agreementConfirm
                          : null
                      }
                      status={
                        errors.agreementConfirm && touched.agreementConfirm
                          ? 'danger'
                          : 'success'
                      }
                      style={styles.toggle}
                      onBlur={handleBlur('agreementConfirm')}
                      checked={values.agreementConfirm}
                      onChange={value =>
                        setFieldValue('agreementConfirm', value)
                      }
                      onFocus={() =>
                        setTouched({...touched, agreementConfirm: true})
                      }
                    />
                  </View>
                  <View>
                    <TouchableOpacity>
                      <Text>
                        I agree to the{' '}
                        <Text
                          onPress={() => navigation.navigate(TERMS)}
                          style={styles.underline}>
                          Terms & Conditions
                        </Text>
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {errors.agreementConfirm && (
                  <Text style={styles.agreementConfirm}>
                    {errors.agreementConfirm}
                  </Text>
                )}

                <Button
                  status="success"
                  style={styles.Btn}
                  onPress={() => {
                    handleSubmit();
                  }}
                  title="Submit">
                  SAVE
                </Button>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
  },
  view: {
    padding: 20,
    backgroundColor: '#00e096',
    justifyContent: 'flex-end',
    alignItems: 'center',
    minHeight: 135,
  },
  input: {
    marginVertical: 10,
  },
  Btn: {
    marginTop: 30,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  toggleView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 5,
  },
  toggle: {
    marginRight: 5,
  },
  agreementConfirm: {
    color: '#FF204E',
  },
});
export default Form;
