import React from 'react';
import SideBar from '../SideBar';
import Main from '../Main';
import Repo from '../Repo';
import Repos from '../Repos';
import './style.scss';

const dummyData = {
  img: 'https://avatars0.githubusercontent.com/u/24781453?s=460&v=4',
  name: 'dys2',
  testResults: [
    {
      RepoName: 'DYS2-Hooks',
      results: {
        numFailedTestSuites: 0,
        numFailedTests: 0,
        numPassedTestSuites: 5,
        numPassedTests: 51,
        numPendingTestSuites: 0,
        numPendingTests: 0,
        numRuntimeErrorTestSuites: 0,
        numTotalTestSuites: 5,
        numTotalTests: 51,
        snapshot: {
          added: 0,
          failure: false,
          filesAdded: 0,
          filesRemoved: 0,
          filesUnmatched: 0,
          filesUpdated: 0,
          matched: 0,
          total: 0,
          unchecked: 0,
          unmatched: 0,
          updated: 0
        },
        startTime: 1516403968595,
        success: true,
        testResults: [
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should be a valid JS class'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should set an email and password property from the provided options object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working comparePasswords method that returns a boolean value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have the properties name and age and the methods growOlder and meow'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should inherit properties and methods from Animal'
              }
            ],
            endTime: 1516403974239,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/class.test.js',
            startTime: 1516403970272,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should invoke cb on each array element'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should pass the element and the index to cb'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the callback passed to it for each element in array given'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should pass each item into the transform function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the callback passed to it for each element in array given'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: "should reduce the array's contents to a single value"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should accept a memo argument'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should handle any type of data in the array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the given callback per every item but one in the array and return an expected value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return the first element that passes the truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an empty array if no elements pass truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an array with all elements that pass truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a flattened array when given a nested array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a flattened array regardless of how deep the array nesting is'
              }
            ],
            endTime: 1516403974749,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/arrays.test.js',
            startTime: 1516403970337,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return 1 when the returned function is invoked'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should increment and return the number each time the function is invoked'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object with an increment method and a decrement method'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working increment method that increments the private counter and returns the new value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working decrement method that decrements the private counter and returns the new value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a wrapped version of the original function that can only be invoked n times'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should properly handle arguments in the wrapped function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'The cached function should return the correct result'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should cache function results and not rerun the original callback if the same arguments are presented'
              }
            ],
            endTime: 1516403974824,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/closure.test.js',
            startTime: 1516403971035,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return an array of strings that correspond with the object's properties"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return an array of strings that correspond with the object's values"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object with all of its values properly mapped'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array of arrays'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return key, value pairs that properly match the object's properties"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object where the keys and values have been switched'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object where defaults have been filled in'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should not overwrite existing defined properties with defaults'
              }
            ],
            endTime: 1516403974876,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/objects.test.js',
            startTime: 1516403971178,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return the nth fibonacci number'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return the factorial of a given number'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should check if all leaves match'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should check nested objects'
              }
            ],
            endTime: 1516403975070,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/recursion.test.js',
            startTime: 1516403970706,
            status: 'passed',
            summary: ''
          }
        ],
        wasInterrupted: false
      }
    },
    {
      RepoName: 'DYS2-Hooks',
      results: {
        numFailedTestSuites: 0,
        numFailedTests: 0,
        numPassedTestSuites: 5,
        numPassedTests: 51,
        numPendingTestSuites: 0,
        numPendingTests: 0,
        numRuntimeErrorTestSuites: 0,
        numTotalTestSuites: 5,
        numTotalTests: 51,
        snapshot: {
          added: 0,
          failure: false,
          filesAdded: 0,
          filesRemoved: 0,
          filesUnmatched: 0,
          filesUpdated: 0,
          matched: 0,
          total: 0,
          unchecked: 0,
          unmatched: 0,
          updated: 0
        },
        startTime: 1516403968595,
        success: true,
        testResults: [
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should be a valid JS class'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should set an email and password property from the provided options object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working comparePasswords method that returns a boolean value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have the properties name and age and the methods growOlder and meow'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should inherit properties and methods from Animal'
              }
            ],
            endTime: 1516403974239,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/class.test.js',
            startTime: 1516403970272,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should invoke cb on each array element'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should pass the element and the index to cb'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the callback passed to it for each element in array given'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should pass each item into the transform function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the callback passed to it for each element in array given'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: "should reduce the array's contents to a single value"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should accept a memo argument'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should handle any type of data in the array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the given callback per every item but one in the array and return an expected value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return the first element that passes the truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an empty array if no elements pass truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an array with all elements that pass truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a flattened array when given a nested array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a flattened array regardless of how deep the array nesting is'
              }
            ],
            endTime: 1516403974749,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/arrays.test.js',
            startTime: 1516403970337,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return 1 when the returned function is invoked'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should increment and return the number each time the function is invoked'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object with an increment method and a decrement method'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working increment method that increments the private counter and returns the new value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working decrement method that decrements the private counter and returns the new value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a wrapped version of the original function that can only be invoked n times'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should properly handle arguments in the wrapped function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'The cached function should return the correct result'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should cache function results and not rerun the original callback if the same arguments are presented'
              }
            ],
            endTime: 1516403974824,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/closure.test.js',
            startTime: 1516403971035,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return an array of strings that correspond with the object's properties"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return an array of strings that correspond with the object's values"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object with all of its values properly mapped'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array of arrays'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return key, value pairs that properly match the object's properties"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object where the keys and values have been switched'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object where defaults have been filled in'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should not overwrite existing defined properties with defaults'
              }
            ],
            endTime: 1516403974876,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/objects.test.js',
            startTime: 1516403971178,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return the nth fibonacci number'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return the factorial of a given number'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should check if all leaves match'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should check nested objects'
              }
            ],
            endTime: 1516403975070,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/recursion.test.js',
            startTime: 1516403970706,
            status: 'passed',
            summary: ''
          }
        ],
        wasInterrupted: false
      }
    },
    {
      RepoName: 'DYS2-Hooks',
      results: {
        numFailedTestSuites: 0,
        numFailedTests: 0,
        numPassedTestSuites: 5,
        numPassedTests: 51,
        numPendingTestSuites: 0,
        numPendingTests: 0,
        numRuntimeErrorTestSuites: 0,
        numTotalTestSuites: 5,
        numTotalTests: 51,
        snapshot: {
          added: 0,
          failure: false,
          filesAdded: 0,
          filesRemoved: 0,
          filesUnmatched: 0,
          filesUpdated: 0,
          matched: 0,
          total: 0,
          unchecked: 0,
          unmatched: 0,
          updated: 0
        },
        startTime: 1516403968595,
        success: true,
        testResults: [
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should be a valid JS class'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should set an email and password property from the provided options object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working comparePasswords method that returns a boolean value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have the properties name and age and the methods growOlder and meow'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should inherit properties and methods from Animal'
              }
            ],
            endTime: 1516403974239,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/class.test.js',
            startTime: 1516403970272,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should invoke cb on each array element'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should pass the element and the index to cb'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the callback passed to it for each element in array given'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should pass each item into the transform function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the callback passed to it for each element in array given'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: "should reduce the array's contents to a single value"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should accept a memo argument'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should handle any type of data in the array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the given callback per every item but one in the array and return an expected value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return the first element that passes the truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an empty array if no elements pass truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an array with all elements that pass truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a flattened array when given a nested array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a flattened array regardless of how deep the array nesting is'
              }
            ],
            endTime: 1516403974749,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/arrays.test.js',
            startTime: 1516403970337,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return 1 when the returned function is invoked'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should increment and return the number each time the function is invoked'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object with an increment method and a decrement method'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working increment method that increments the private counter and returns the new value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working decrement method that decrements the private counter and returns the new value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a wrapped version of the original function that can only be invoked n times'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should properly handle arguments in the wrapped function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'The cached function should return the correct result'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should cache function results and not rerun the original callback if the same arguments are presented'
              }
            ],
            endTime: 1516403974824,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/closure.test.js',
            startTime: 1516403971035,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return an array of strings that correspond with the object's properties"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return an array of strings that correspond with the object's values"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object with all of its values properly mapped'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array of arrays'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return key, value pairs that properly match the object's properties"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object where the keys and values have been switched'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object where defaults have been filled in'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should not overwrite existing defined properties with defaults'
              }
            ],
            endTime: 1516403974876,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/objects.test.js',
            startTime: 1516403971178,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return the nth fibonacci number'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return the factorial of a given number'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should check if all leaves match'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should check nested objects'
              }
            ],
            endTime: 1516403975070,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/recursion.test.js',
            startTime: 1516403970706,
            status: 'passed',
            summary: ''
          }
        ],
        wasInterrupted: false
      }
    },
    {
      RepoName: 'DYS2-Hooks',
      results: {
        numFailedTestSuites: 0,
        numFailedTests: 0,
        numPassedTestSuites: 5,
        numPassedTests: 51,
        numPendingTestSuites: 0,
        numPendingTests: 0,
        numRuntimeErrorTestSuites: 0,
        numTotalTestSuites: 5,
        numTotalTests: 51,
        snapshot: {
          added: 0,
          failure: false,
          filesAdded: 0,
          filesRemoved: 0,
          filesUnmatched: 0,
          filesUpdated: 0,
          matched: 0,
          total: 0,
          unchecked: 0,
          unmatched: 0,
          updated: 0
        },
        startTime: 1516403968595,
        success: true,
        testResults: [
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should be a valid JS class'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should set an email and password property from the provided options object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working comparePasswords method that returns a boolean value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have the properties name and age and the methods growOlder and meow'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should inherit properties and methods from Animal'
              }
            ],
            endTime: 1516403974239,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/class.test.js',
            startTime: 1516403970272,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should invoke cb on each array element'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should pass the element and the index to cb'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the callback passed to it for each element in array given'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should pass each item into the transform function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the callback passed to it for each element in array given'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: "should reduce the array's contents to a single value"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should accept a memo argument'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should handle any type of data in the array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the given callback per every item but one in the array and return an expected value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return the first element that passes the truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an empty array if no elements pass truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an array with all elements that pass truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a flattened array when given a nested array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a flattened array regardless of how deep the array nesting is'
              }
            ],
            endTime: 1516403974749,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/arrays.test.js',
            startTime: 1516403970337,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return 1 when the returned function is invoked'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should increment and return the number each time the function is invoked'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object with an increment method and a decrement method'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working increment method that increments the private counter and returns the new value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working decrement method that decrements the private counter and returns the new value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a wrapped version of the original function that can only be invoked n times'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should properly handle arguments in the wrapped function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'The cached function should return the correct result'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should cache function results and not rerun the original callback if the same arguments are presented'
              }
            ],
            endTime: 1516403974824,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/closure.test.js',
            startTime: 1516403971035,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return an array of strings that correspond with the object's properties"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return an array of strings that correspond with the object's values"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object with all of its values properly mapped'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array of arrays'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return key, value pairs that properly match the object's properties"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object where the keys and values have been switched'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object where defaults have been filled in'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should not overwrite existing defined properties with defaults'
              }
            ],
            endTime: 1516403974876,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/objects.test.js',
            startTime: 1516403971178,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return the nth fibonacci number'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return the factorial of a given number'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should check if all leaves match'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should check nested objects'
              }
            ],
            endTime: 1516403975070,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/recursion.test.js',
            startTime: 1516403970706,
            status: 'passed',
            summary: ''
          }
        ],
        wasInterrupted: false
      }
    },
    {
      RepoName: 'DYS2-Hooks',
      results: {
        numFailedTestSuites: 0,
        numFailedTests: 0,
        numPassedTestSuites: 5,
        numPassedTests: 51,
        numPendingTestSuites: 0,
        numPendingTests: 0,
        numRuntimeErrorTestSuites: 0,
        numTotalTestSuites: 5,
        numTotalTests: 51,
        snapshot: {
          added: 0,
          failure: false,
          filesAdded: 0,
          filesRemoved: 0,
          filesUnmatched: 0,
          filesUpdated: 0,
          matched: 0,
          total: 0,
          unchecked: 0,
          unmatched: 0,
          updated: 0
        },
        startTime: 1516403968595,
        success: true,
        testResults: [
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should be a valid JS class'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should set an email and password property from the provided options object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working comparePasswords method that returns a boolean value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have the properties name and age and the methods growOlder and meow'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should inherit properties and methods from Animal'
              }
            ],
            endTime: 1516403974239,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/class.test.js',
            startTime: 1516403970272,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should invoke cb on each array element'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should pass the element and the index to cb'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the callback passed to it for each element in array given'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should pass each item into the transform function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the callback passed to it for each element in array given'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: "should reduce the array's contents to a single value"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should accept a memo argument'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should handle any type of data in the array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the given callback per every item but one in the array and return an expected value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return the first element that passes the truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an empty array if no elements pass truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an array with all elements that pass truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a flattened array when given a nested array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a flattened array regardless of how deep the array nesting is'
              }
            ],
            endTime: 1516403974749,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/arrays.test.js',
            startTime: 1516403970337,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return 1 when the returned function is invoked'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should increment and return the number each time the function is invoked'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object with an increment method and a decrement method'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working increment method that increments the private counter and returns the new value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working decrement method that decrements the private counter and returns the new value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a wrapped version of the original function that can only be invoked n times'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should properly handle arguments in the wrapped function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'The cached function should return the correct result'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should cache function results and not rerun the original callback if the same arguments are presented'
              }
            ],
            endTime: 1516403974824,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/closure.test.js',
            startTime: 1516403971035,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return an array of strings that correspond with the object's properties"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return an array of strings that correspond with the object's values"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object with all of its values properly mapped'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array of arrays'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return key, value pairs that properly match the object's properties"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object where the keys and values have been switched'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object where defaults have been filled in'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should not overwrite existing defined properties with defaults'
              }
            ],
            endTime: 1516403974876,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/objects.test.js',
            startTime: 1516403971178,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return the nth fibonacci number'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return the factorial of a given number'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should check if all leaves match'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should check nested objects'
              }
            ],
            endTime: 1516403975070,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/recursion.test.js',
            startTime: 1516403970706,
            status: 'passed',
            summary: ''
          }
        ],
        wasInterrupted: false
      }
    },
    {
      RepoName: 'DYS2-Hooks',
      results: {
        numFailedTestSuites: 0,
        numFailedTests: 0,
        numPassedTestSuites: 5,
        numPassedTests: 51,
        numPendingTestSuites: 0,
        numPendingTests: 0,
        numRuntimeErrorTestSuites: 0,
        numTotalTestSuites: 5,
        numTotalTests: 51,
        snapshot: {
          added: 0,
          failure: false,
          filesAdded: 0,
          filesRemoved: 0,
          filesUnmatched: 0,
          filesUpdated: 0,
          matched: 0,
          total: 0,
          unchecked: 0,
          unmatched: 0,
          updated: 0
        },
        startTime: 1516403968595,
        success: true,
        testResults: [
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should be a valid JS class'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should set an email and password property from the provided options object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working comparePasswords method that returns a boolean value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have the properties name and age and the methods growOlder and meow'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should inherit properties and methods from Animal'
              }
            ],
            endTime: 1516403974239,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/class.test.js',
            startTime: 1516403970272,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should invoke cb on each array element'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should pass the element and the index to cb'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the callback passed to it for each element in array given'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should pass each item into the transform function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the callback passed to it for each element in array given'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: "should reduce the array's contents to a single value"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should accept a memo argument'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should handle any type of data in the array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the given callback per every item but one in the array and return an expected value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return the first element that passes the truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an empty array if no elements pass truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an array with all elements that pass truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a flattened array when given a nested array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a flattened array regardless of how deep the array nesting is'
              }
            ],
            endTime: 1516403974749,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/arrays.test.js',
            startTime: 1516403970337,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return 1 when the returned function is invoked'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should increment and return the number each time the function is invoked'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object with an increment method and a decrement method'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working increment method that increments the private counter and returns the new value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working decrement method that decrements the private counter and returns the new value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a wrapped version of the original function that can only be invoked n times'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should properly handle arguments in the wrapped function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'The cached function should return the correct result'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should cache function results and not rerun the original callback if the same arguments are presented'
              }
            ],
            endTime: 1516403974824,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/closure.test.js',
            startTime: 1516403971035,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return an array of strings that correspond with the object's properties"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return an array of strings that correspond with the object's values"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object with all of its values properly mapped'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array of arrays'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return key, value pairs that properly match the object's properties"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object where the keys and values have been switched'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object where defaults have been filled in'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should not overwrite existing defined properties with defaults'
              }
            ],
            endTime: 1516403974876,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/objects.test.js',
            startTime: 1516403971178,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return the nth fibonacci number'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return the factorial of a given number'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should check if all leaves match'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should check nested objects'
              }
            ],
            endTime: 1516403975070,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/recursion.test.js',
            startTime: 1516403970706,
            status: 'passed',
            summary: ''
          }
        ],
        wasInterrupted: false
      }
    },
    {
      RepoName: 'DYS2-Hooks',
      results: {
        numFailedTestSuites: 0,
        numFailedTests: 0,
        numPassedTestSuites: 5,
        numPassedTests: 51,
        numPendingTestSuites: 0,
        numPendingTests: 0,
        numRuntimeErrorTestSuites: 0,
        numTotalTestSuites: 5,
        numTotalTests: 51,
        snapshot: {
          added: 0,
          failure: false,
          filesAdded: 0,
          filesRemoved: 0,
          filesUnmatched: 0,
          filesUpdated: 0,
          matched: 0,
          total: 0,
          unchecked: 0,
          unmatched: 0,
          updated: 0
        },
        startTime: 1516403968595,
        success: true,
        testResults: [
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should be a valid JS class'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should set an email and password property from the provided options object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working comparePasswords method that returns a boolean value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have the properties name and age and the methods growOlder and meow'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should inherit properties and methods from Animal'
              }
            ],
            endTime: 1516403974239,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/class.test.js',
            startTime: 1516403970272,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should invoke cb on each array element'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should pass the element and the index to cb'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the callback passed to it for each element in array given'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should pass each item into the transform function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the callback passed to it for each element in array given'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: "should reduce the array's contents to a single value"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should accept a memo argument'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should handle any type of data in the array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the given callback per every item but one in the array and return an expected value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return the first element that passes the truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an empty array if no elements pass truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an array with all elements that pass truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a flattened array when given a nested array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a flattened array regardless of how deep the array nesting is'
              }
            ],
            endTime: 1516403974749,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/arrays.test.js',
            startTime: 1516403970337,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return 1 when the returned function is invoked'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should increment and return the number each time the function is invoked'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object with an increment method and a decrement method'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working increment method that increments the private counter and returns the new value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working decrement method that decrements the private counter and returns the new value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a wrapped version of the original function that can only be invoked n times'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should properly handle arguments in the wrapped function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'The cached function should return the correct result'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should cache function results and not rerun the original callback if the same arguments are presented'
              }
            ],
            endTime: 1516403974824,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/closure.test.js',
            startTime: 1516403971035,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return an array of strings that correspond with the object's properties"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return an array of strings that correspond with the object's values"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object with all of its values properly mapped'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array of arrays'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return key, value pairs that properly match the object's properties"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object where the keys and values have been switched'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object where defaults have been filled in'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should not overwrite existing defined properties with defaults'
              }
            ],
            endTime: 1516403974876,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/objects.test.js',
            startTime: 1516403971178,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return the nth fibonacci number'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return the factorial of a given number'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should check if all leaves match'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should check nested objects'
              }
            ],
            endTime: 1516403975070,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/recursion.test.js',
            startTime: 1516403970706,
            status: 'passed',
            summary: ''
          }
        ],
        wasInterrupted: false
      }
    },
    {
      RepoName: 'DYS2-Hooks',
      results: {
        numFailedTestSuites: 0,
        numFailedTests: 0,
        numPassedTestSuites: 5,
        numPassedTests: 51,
        numPendingTestSuites: 0,
        numPendingTests: 0,
        numRuntimeErrorTestSuites: 0,
        numTotalTestSuites: 5,
        numTotalTests: 51,
        snapshot: {
          added: 0,
          failure: false,
          filesAdded: 0,
          filesRemoved: 0,
          filesUnmatched: 0,
          filesUpdated: 0,
          matched: 0,
          total: 0,
          unchecked: 0,
          unmatched: 0,
          updated: 0
        },
        startTime: 1516403968595,
        success: true,
        testResults: [
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should be a valid JS class'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should set an email and password property from the provided options object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working comparePasswords method that returns a boolean value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have the properties name and age and the methods growOlder and meow'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should inherit properties and methods from Animal'
              }
            ],
            endTime: 1516403974239,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/class.test.js',
            startTime: 1516403970272,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should invoke cb on each array element'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should pass the element and the index to cb'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the callback passed to it for each element in array given'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should pass each item into the transform function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the callback passed to it for each element in array given'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: "should reduce the array's contents to a single value"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should accept a memo argument'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should handle any type of data in the array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should call the given callback per every item but one in the array and return an expected value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return the first element that passes the truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an empty array if no elements pass truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an array with all elements that pass truth test'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a flattened array when given a nested array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a flattened array regardless of how deep the array nesting is'
              }
            ],
            endTime: 1516403974749,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/arrays.test.js',
            startTime: 1516403970337,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return 1 when the returned function is invoked'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should increment and return the number each time the function is invoked'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object with an increment method and a decrement method'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working increment method that increments the private counter and returns the new value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should have a working decrement method that decrements the private counter and returns the new value'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return a wrapped version of the original function that can only be invoked n times'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should properly handle arguments in the wrapped function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return a function'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'The cached function should return the correct result'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should cache function results and not rerun the original callback if the same arguments are presented'
              }
            ],
            endTime: 1516403974824,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/closure.test.js',
            startTime: 1516403971035,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return an array of strings that correspond with the object's properties"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return an array of strings that correspond with the object's values"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object with all of its values properly mapped'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an array of arrays'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  "should return key, value pairs that properly match the object's properties"
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object where the keys and values have been switched'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return an object'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should return an object where defaults have been filled in'
              },
              {
                failureMessages: [],
                status: 'passed',
                title:
                  'should not overwrite existing defined properties with defaults'
              }
            ],
            endTime: 1516403974876,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/objects.test.js',
            startTime: 1516403971178,
            status: 'passed',
            summary: ''
          },
          {
            assertionResults: [
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return the nth fibonacci number'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should return the factorial of a given number'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should check if all leaves match'
              },
              {
                failureMessages: [],
                status: 'passed',
                title: 'should check nested objects'
              }
            ],
            endTime: 1516403975070,
            message: '',
            name:
              '/usr/src/app/recEguBwPlpaCF6lj1516403948881/tests/recursion.test.js',
            startTime: 1516403970706,
            status: 'passed',
            summary: ''
          }
        ],
        wasInterrupted: false
      }
    }
  ]
};

export default class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRepo: false,
      repo: {}
    };
    this.setRepo = this.setRepo.bind(this);
    this.showAll = this.showAll.bind(this);
  }
  componentDidMount() {
    this.props.showPage();
  }
  setRepo(repo) {
    this.setState({ showRepo: true, repo });
  }
  showAll() {
    this.setState({ showRepo: false });
  }
  render() {
    return (
      <div className="student-page">
        <SideBar
          data={dummyData}
          setRepo={this.setRepo}
          user={this.props.user}
        />
        <div>
          <Main data={dummyData} />
          {this.state.showRepo ? (
            <Repo hi="hi" data={this.state.repo} showAll={this.showAll} />
          ) : (
            <Repos data={dummyData} setRepo={this.setRepo} />
          )}
        </div>
      </div>
    );
  }
}
