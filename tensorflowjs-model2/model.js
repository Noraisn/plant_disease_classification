const model = {
  "format": "layers-model",
  "generatedBy": "keras v2.8.0",
  "convertedBy": "TensorFlow.js Converter v3.18.0",
  "modelTopology": {
    "keras_version": "2.8.0",
    "backend": "tensorflow",
    "model_config": {
      "class_name": "Sequential",
      "config": {
        "name": "sequential",
        "layers": [
          {
            "class_name": "InputLayer",
            "config": {
              "batch_input_shape": [
                null,
                300,
                300,
                3
              ],
              "dtype": "float32",
              "sparse": false,
              "ragged": false,
              "name": "efficientnetb0_input"
            }
          },
          {
            "class_name": "Model",
            "config": {
              "name": "efficientnetb0",
              "layers": [
                {
                  "class_name": "InputLayer",
                  "config": {
                    "batch_input_shape": [
                      null,
                      300,
                      300,
                      3
                    ],
                    "dtype": "float32",
                    "sparse": false,
                    "ragged": false,
                    "name": "input_1"
                  },
                  "name": "input_1",
                  "inbound_nodes": []
                },
                {
                  "class_name": "ZeroPadding2D",
                  "config": {
                    "name": "stem_conv_pad",
                    "trainable": true,
                    "dtype": "float32",
                    "padding": [
                      [
                        0,
                        1
                      ],
                      [
                        0,
                        1
                      ]
                    ],
                    "data_format": "channels_last"
                  },
                  "name": "stem_conv_pad",
                  "inbound_nodes": [
                    [
                      [
                        "normalization",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "stem_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 32,
                    "kernel_size": [
                      3,
                      3
                    ],
                    "strides": [
                      2,
                      2
                    ],
                    "padding": "valid",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "stem_conv",
                  "inbound_nodes": [
                    [
                      [
                        "stem_conv_pad",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "stem_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "stem_bn",
                  "inbound_nodes": [
                    [
                      [
                        "stem_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "stem_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "stem_activation",
                  "inbound_nodes": [
                    [
                      [
                        "stem_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "DepthwiseConv2D",
                  "config": {
                    "name": "block1a_dwconv",
                    "trainable": true,
                    "dtype": "float32",
                    "kernel_size": [
                      3,
                      3
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "bias_constraint": null,
                    "depth_multiplier": 1,
                    "depthwise_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null
                  },
                  "name": "block1a_dwconv",
                  "inbound_nodes": [
                    [
                      [
                        "stem_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block1a_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block1a_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block1a_dwconv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block1a_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block1a_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block1a_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "GlobalAveragePooling2D",
                  "config": {
                    "name": "block1a_se_squeeze",
                    "trainable": true,
                    "dtype": "float32",
                    "data_format": "channels_last",
                    "keepdims": false
                  },
                  "name": "block1a_se_squeeze",
                  "inbound_nodes": [
                    [
                      [
                        "block1a_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Reshape",
                  "config": {
                    "name": "block1a_se_reshape",
                    "trainable": true,
                    "dtype": "float32",
                    "target_shape": [
                      1,
                      1,
                      32
                    ]
                  },
                  "name": "block1a_se_reshape",
                  "inbound_nodes": [
                    [
                      [
                        "block1a_se_squeeze",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block1a_se_reduce",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 8,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "swish",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block1a_se_reduce",
                  "inbound_nodes": [
                    [
                      [
                        "block1a_se_reshape",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block1a_se_expand",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 32,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "sigmoid",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block1a_se_expand",
                  "inbound_nodes": [
                    [
                      [
                        "block1a_se_reduce",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Multiply",
                  "config": {
                    "name": "block1a_se_excite",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block1a_se_excite",
                  "inbound_nodes": [
                    [
                      [
                        "block1a_activation",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block1a_se_expand",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block1a_project_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 16,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block1a_project_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block1a_se_excite",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block1a_project_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block1a_project_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block1a_project_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block2a_expand_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 96,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block2a_expand_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block1a_project_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block2a_expand_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block2a_expand_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block2a_expand_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block2a_expand_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block2a_expand_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block2a_expand_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "ZeroPadding2D",
                  "config": {
                    "name": "block2a_dwconv_pad",
                    "trainable": true,
                    "dtype": "float32",
                    "padding": [
                      [
                        0,
                        1
                      ],
                      [
                        0,
                        1
                      ]
                    ],
                    "data_format": "channels_last"
                  },
                  "name": "block2a_dwconv_pad",
                  "inbound_nodes": [
                    [
                      [
                        "block2a_expand_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "DepthwiseConv2D",
                  "config": {
                    "name": "block2a_dwconv",
                    "trainable": true,
                    "dtype": "float32",
                    "kernel_size": [
                      3,
                      3
                    ],
                    "strides": [
                      2,
                      2
                    ],
                    "padding": "valid",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "bias_constraint": null,
                    "depth_multiplier": 1,
                    "depthwise_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null
                  },
                  "name": "block2a_dwconv",
                  "inbound_nodes": [
                    [
                      [
                        "block2a_dwconv_pad",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block2a_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block2a_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block2a_dwconv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block2a_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block2a_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block2a_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "GlobalAveragePooling2D",
                  "config": {
                    "name": "block2a_se_squeeze",
                    "trainable": true,
                    "dtype": "float32",
                    "data_format": "channels_last",
                    "keepdims": false
                  },
                  "name": "block2a_se_squeeze",
                  "inbound_nodes": [
                    [
                      [
                        "block2a_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Reshape",
                  "config": {
                    "name": "block2a_se_reshape",
                    "trainable": true,
                    "dtype": "float32",
                    "target_shape": [
                      1,
                      1,
                      96
                    ]
                  },
                  "name": "block2a_se_reshape",
                  "inbound_nodes": [
                    [
                      [
                        "block2a_se_squeeze",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block2a_se_reduce",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 4,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "swish",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block2a_se_reduce",
                  "inbound_nodes": [
                    [
                      [
                        "block2a_se_reshape",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block2a_se_expand",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 96,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "sigmoid",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block2a_se_expand",
                  "inbound_nodes": [
                    [
                      [
                        "block2a_se_reduce",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Multiply",
                  "config": {
                    "name": "block2a_se_excite",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block2a_se_excite",
                  "inbound_nodes": [
                    [
                      [
                        "block2a_activation",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block2a_se_expand",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block2a_project_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 24,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block2a_project_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block2a_se_excite",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block2a_project_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block2a_project_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block2a_project_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block2b_expand_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 144,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block2b_expand_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block2a_project_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block2b_expand_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block2b_expand_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block2b_expand_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block2b_expand_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block2b_expand_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block2b_expand_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "DepthwiseConv2D",
                  "config": {
                    "name": "block2b_dwconv",
                    "trainable": true,
                    "dtype": "float32",
                    "kernel_size": [
                      3,
                      3
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "bias_constraint": null,
                    "depth_multiplier": 1,
                    "depthwise_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null
                  },
                  "name": "block2b_dwconv",
                  "inbound_nodes": [
                    [
                      [
                        "block2b_expand_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block2b_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block2b_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block2b_dwconv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block2b_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block2b_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block2b_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "GlobalAveragePooling2D",
                  "config": {
                    "name": "block2b_se_squeeze",
                    "trainable": true,
                    "dtype": "float32",
                    "data_format": "channels_last",
                    "keepdims": false
                  },
                  "name": "block2b_se_squeeze",
                  "inbound_nodes": [
                    [
                      [
                        "block2b_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Reshape",
                  "config": {
                    "name": "block2b_se_reshape",
                    "trainable": true,
                    "dtype": "float32",
                    "target_shape": [
                      1,
                      1,
                      144
                    ]
                  },
                  "name": "block2b_se_reshape",
                  "inbound_nodes": [
                    [
                      [
                        "block2b_se_squeeze",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block2b_se_reduce",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 6,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "swish",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block2b_se_reduce",
                  "inbound_nodes": [
                    [
                      [
                        "block2b_se_reshape",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block2b_se_expand",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 144,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "sigmoid",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block2b_se_expand",
                  "inbound_nodes": [
                    [
                      [
                        "block2b_se_reduce",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Multiply",
                  "config": {
                    "name": "block2b_se_excite",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block2b_se_excite",
                  "inbound_nodes": [
                    [
                      [
                        "block2b_activation",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block2b_se_expand",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block2b_project_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 24,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block2b_project_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block2b_se_excite",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block2b_project_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block2b_project_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block2b_project_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Dropout",
                  "config": {
                    "name": "block2b_drop",
                    "trainable": true,
                    "dtype": "float32",
                    "rate": 0.025,
                    "noise_shape": [
                      null,
                      1,
                      1,
                      1
                    ],
                    "seed": null
                  },
                  "name": "block2b_drop",
                  "inbound_nodes": [
                    [
                      [
                        "block2b_project_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Add",
                  "config": {
                    "name": "block2b_add",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block2b_add",
                  "inbound_nodes": [
                    [
                      [
                        "block2b_drop",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block2a_project_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block3a_expand_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 144,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block3a_expand_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block2b_add",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block3a_expand_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block3a_expand_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block3a_expand_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block3a_expand_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block3a_expand_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block3a_expand_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "ZeroPadding2D",
                  "config": {
                    "name": "block3a_dwconv_pad",
                    "trainable": true,
                    "dtype": "float32",
                    "padding": [
                      [
                        2,
                        2
                      ],
                      [
                        2,
                        2
                      ]
                    ],
                    "data_format": "channels_last"
                  },
                  "name": "block3a_dwconv_pad",
                  "inbound_nodes": [
                    [
                      [
                        "block3a_expand_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "DepthwiseConv2D",
                  "config": {
                    "name": "block3a_dwconv",
                    "trainable": true,
                    "dtype": "float32",
                    "kernel_size": [
                      5,
                      5
                    ],
                    "strides": [
                      2,
                      2
                    ],
                    "padding": "valid",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "bias_constraint": null,
                    "depth_multiplier": 1,
                    "depthwise_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null
                  },
                  "name": "block3a_dwconv",
                  "inbound_nodes": [
                    [
                      [
                        "block3a_dwconv_pad",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block3a_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block3a_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block3a_dwconv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block3a_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block3a_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block3a_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "GlobalAveragePooling2D",
                  "config": {
                    "name": "block3a_se_squeeze",
                    "trainable": true,
                    "dtype": "float32",
                    "data_format": "channels_last",
                    "keepdims": false
                  },
                  "name": "block3a_se_squeeze",
                  "inbound_nodes": [
                    [
                      [
                        "block3a_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Reshape",
                  "config": {
                    "name": "block3a_se_reshape",
                    "trainable": true,
                    "dtype": "float32",
                    "target_shape": [
                      1,
                      1,
                      144
                    ]
                  },
                  "name": "block3a_se_reshape",
                  "inbound_nodes": [
                    [
                      [
                        "block3a_se_squeeze",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block3a_se_reduce",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 6,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "swish",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block3a_se_reduce",
                  "inbound_nodes": [
                    [
                      [
                        "block3a_se_reshape",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block3a_se_expand",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 144,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "sigmoid",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block3a_se_expand",
                  "inbound_nodes": [
                    [
                      [
                        "block3a_se_reduce",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Multiply",
                  "config": {
                    "name": "block3a_se_excite",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block3a_se_excite",
                  "inbound_nodes": [
                    [
                      [
                        "block3a_activation",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block3a_se_expand",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block3a_project_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 40,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block3a_project_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block3a_se_excite",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block3a_project_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block3a_project_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block3a_project_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block3b_expand_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 240,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block3b_expand_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block3a_project_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block3b_expand_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block3b_expand_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block3b_expand_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block3b_expand_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block3b_expand_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block3b_expand_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "DepthwiseConv2D",
                  "config": {
                    "name": "block3b_dwconv",
                    "trainable": true,
                    "dtype": "float32",
                    "kernel_size": [
                      5,
                      5
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "bias_constraint": null,
                    "depth_multiplier": 1,
                    "depthwise_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null
                  },
                  "name": "block3b_dwconv",
                  "inbound_nodes": [
                    [
                      [
                        "block3b_expand_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block3b_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block3b_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block3b_dwconv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block3b_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block3b_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block3b_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "GlobalAveragePooling2D",
                  "config": {
                    "name": "block3b_se_squeeze",
                    "trainable": true,
                    "dtype": "float32",
                    "data_format": "channels_last",
                    "keepdims": false
                  },
                  "name": "block3b_se_squeeze",
                  "inbound_nodes": [
                    [
                      [
                        "block3b_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Reshape",
                  "config": {
                    "name": "block3b_se_reshape",
                    "trainable": true,
                    "dtype": "float32",
                    "target_shape": [
                      1,
                      1,
                      240
                    ]
                  },
                  "name": "block3b_se_reshape",
                  "inbound_nodes": [
                    [
                      [
                        "block3b_se_squeeze",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block3b_se_reduce",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 10,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "swish",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block3b_se_reduce",
                  "inbound_nodes": [
                    [
                      [
                        "block3b_se_reshape",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block3b_se_expand",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 240,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "sigmoid",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block3b_se_expand",
                  "inbound_nodes": [
                    [
                      [
                        "block3b_se_reduce",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Multiply",
                  "config": {
                    "name": "block3b_se_excite",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block3b_se_excite",
                  "inbound_nodes": [
                    [
                      [
                        "block3b_activation",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block3b_se_expand",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block3b_project_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 40,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block3b_project_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block3b_se_excite",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block3b_project_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block3b_project_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block3b_project_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Dropout",
                  "config": {
                    "name": "block3b_drop",
                    "trainable": true,
                    "dtype": "float32",
                    "rate": 0.05,
                    "noise_shape": [
                      null,
                      1,
                      1,
                      1
                    ],
                    "seed": null
                  },
                  "name": "block3b_drop",
                  "inbound_nodes": [
                    [
                      [
                        "block3b_project_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Add",
                  "config": {
                    "name": "block3b_add",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block3b_add",
                  "inbound_nodes": [
                    [
                      [
                        "block3b_drop",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block3a_project_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block4a_expand_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 240,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block4a_expand_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block3b_add",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block4a_expand_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block4a_expand_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block4a_expand_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block4a_expand_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block4a_expand_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block4a_expand_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "ZeroPadding2D",
                  "config": {
                    "name": "block4a_dwconv_pad",
                    "trainable": true,
                    "dtype": "float32",
                    "padding": [
                      [
                        0,
                        1
                      ],
                      [
                        0,
                        1
                      ]
                    ],
                    "data_format": "channels_last"
                  },
                  "name": "block4a_dwconv_pad",
                  "inbound_nodes": [
                    [
                      [
                        "block4a_expand_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "DepthwiseConv2D",
                  "config": {
                    "name": "block4a_dwconv",
                    "trainable": true,
                    "dtype": "float32",
                    "kernel_size": [
                      3,
                      3
                    ],
                    "strides": [
                      2,
                      2
                    ],
                    "padding": "valid",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "bias_constraint": null,
                    "depth_multiplier": 1,
                    "depthwise_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null
                  },
                  "name": "block4a_dwconv",
                  "inbound_nodes": [
                    [
                      [
                        "block4a_dwconv_pad",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block4a_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block4a_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block4a_dwconv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block4a_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block4a_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block4a_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "GlobalAveragePooling2D",
                  "config": {
                    "name": "block4a_se_squeeze",
                    "trainable": true,
                    "dtype": "float32",
                    "data_format": "channels_last",
                    "keepdims": false
                  },
                  "name": "block4a_se_squeeze",
                  "inbound_nodes": [
                    [
                      [
                        "block4a_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Reshape",
                  "config": {
                    "name": "block4a_se_reshape",
                    "trainable": true,
                    "dtype": "float32",
                    "target_shape": [
                      1,
                      1,
                      240
                    ]
                  },
                  "name": "block4a_se_reshape",
                  "inbound_nodes": [
                    [
                      [
                        "block4a_se_squeeze",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block4a_se_reduce",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 10,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "swish",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block4a_se_reduce",
                  "inbound_nodes": [
                    [
                      [
                        "block4a_se_reshape",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block4a_se_expand",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 240,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "sigmoid",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block4a_se_expand",
                  "inbound_nodes": [
                    [
                      [
                        "block4a_se_reduce",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Multiply",
                  "config": {
                    "name": "block4a_se_excite",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block4a_se_excite",
                  "inbound_nodes": [
                    [
                      [
                        "block4a_activation",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block4a_se_expand",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block4a_project_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 80,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block4a_project_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block4a_se_excite",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block4a_project_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block4a_project_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block4a_project_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block4b_expand_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 480,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block4b_expand_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block4a_project_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block4b_expand_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block4b_expand_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block4b_expand_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block4b_expand_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block4b_expand_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block4b_expand_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "DepthwiseConv2D",
                  "config": {
                    "name": "block4b_dwconv",
                    "trainable": true,
                    "dtype": "float32",
                    "kernel_size": [
                      3,
                      3
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "bias_constraint": null,
                    "depth_multiplier": 1,
                    "depthwise_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null
                  },
                  "name": "block4b_dwconv",
                  "inbound_nodes": [
                    [
                      [
                        "block4b_expand_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block4b_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block4b_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block4b_dwconv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block4b_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block4b_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block4b_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "GlobalAveragePooling2D",
                  "config": {
                    "name": "block4b_se_squeeze",
                    "trainable": true,
                    "dtype": "float32",
                    "data_format": "channels_last",
                    "keepdims": false
                  },
                  "name": "block4b_se_squeeze",
                  "inbound_nodes": [
                    [
                      [
                        "block4b_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Reshape",
                  "config": {
                    "name": "block4b_se_reshape",
                    "trainable": true,
                    "dtype": "float32",
                    "target_shape": [
                      1,
                      1,
                      480
                    ]
                  },
                  "name": "block4b_se_reshape",
                  "inbound_nodes": [
                    [
                      [
                        "block4b_se_squeeze",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block4b_se_reduce",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 20,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "swish",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block4b_se_reduce",
                  "inbound_nodes": [
                    [
                      [
                        "block4b_se_reshape",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block4b_se_expand",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 480,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "sigmoid",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block4b_se_expand",
                  "inbound_nodes": [
                    [
                      [
                        "block4b_se_reduce",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Multiply",
                  "config": {
                    "name": "block4b_se_excite",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block4b_se_excite",
                  "inbound_nodes": [
                    [
                      [
                        "block4b_activation",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block4b_se_expand",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block4b_project_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 80,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block4b_project_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block4b_se_excite",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block4b_project_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block4b_project_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block4b_project_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Dropout",
                  "config": {
                    "name": "block4b_drop",
                    "trainable": true,
                    "dtype": "float32",
                    "rate": 0.07500000000000001,
                    "noise_shape": [
                      null,
                      1,
                      1,
                      1
                    ],
                    "seed": null
                  },
                  "name": "block4b_drop",
                  "inbound_nodes": [
                    [
                      [
                        "block4b_project_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Add",
                  "config": {
                    "name": "block4b_add",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block4b_add",
                  "inbound_nodes": [
                    [
                      [
                        "block4b_drop",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block4a_project_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block4c_expand_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 480,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block4c_expand_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block4b_add",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block4c_expand_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block4c_expand_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block4c_expand_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block4c_expand_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block4c_expand_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block4c_expand_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "DepthwiseConv2D",
                  "config": {
                    "name": "block4c_dwconv",
                    "trainable": true,
                    "dtype": "float32",
                    "kernel_size": [
                      3,
                      3
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "bias_constraint": null,
                    "depth_multiplier": 1,
                    "depthwise_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null
                  },
                  "name": "block4c_dwconv",
                  "inbound_nodes": [
                    [
                      [
                        "block4c_expand_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block4c_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block4c_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block4c_dwconv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block4c_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block4c_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block4c_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "GlobalAveragePooling2D",
                  "config": {
                    "name": "block4c_se_squeeze",
                    "trainable": true,
                    "dtype": "float32",
                    "data_format": "channels_last",
                    "keepdims": false
                  },
                  "name": "block4c_se_squeeze",
                  "inbound_nodes": [
                    [
                      [
                        "block4c_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Reshape",
                  "config": {
                    "name": "block4c_se_reshape",
                    "trainable": true,
                    "dtype": "float32",
                    "target_shape": [
                      1,
                      1,
                      480
                    ]
                  },
                  "name": "block4c_se_reshape",
                  "inbound_nodes": [
                    [
                      [
                        "block4c_se_squeeze",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block4c_se_reduce",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 20,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "swish",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block4c_se_reduce",
                  "inbound_nodes": [
                    [
                      [
                        "block4c_se_reshape",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block4c_se_expand",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 480,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "sigmoid",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block4c_se_expand",
                  "inbound_nodes": [
                    [
                      [
                        "block4c_se_reduce",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Multiply",
                  "config": {
                    "name": "block4c_se_excite",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block4c_se_excite",
                  "inbound_nodes": [
                    [
                      [
                        "block4c_activation",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block4c_se_expand",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block4c_project_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 80,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block4c_project_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block4c_se_excite",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block4c_project_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block4c_project_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block4c_project_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Dropout",
                  "config": {
                    "name": "block4c_drop",
                    "trainable": true,
                    "dtype": "float32",
                    "rate": 0.08750000000000001,
                    "noise_shape": [
                      null,
                      1,
                      1,
                      1
                    ],
                    "seed": null
                  },
                  "name": "block4c_drop",
                  "inbound_nodes": [
                    [
                      [
                        "block4c_project_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Add",
                  "config": {
                    "name": "block4c_add",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block4c_add",
                  "inbound_nodes": [
                    [
                      [
                        "block4c_drop",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block4b_add",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block5a_expand_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 480,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block5a_expand_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block4c_add",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block5a_expand_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block5a_expand_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block5a_expand_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block5a_expand_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block5a_expand_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block5a_expand_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "DepthwiseConv2D",
                  "config": {
                    "name": "block5a_dwconv",
                    "trainable": true,
                    "dtype": "float32",
                    "kernel_size": [
                      5,
                      5
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "bias_constraint": null,
                    "depth_multiplier": 1,
                    "depthwise_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null
                  },
                  "name": "block5a_dwconv",
                  "inbound_nodes": [
                    [
                      [
                        "block5a_expand_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block5a_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block5a_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block5a_dwconv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block5a_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block5a_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block5a_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "GlobalAveragePooling2D",
                  "config": {
                    "name": "block5a_se_squeeze",
                    "trainable": true,
                    "dtype": "float32",
                    "data_format": "channels_last",
                    "keepdims": false
                  },
                  "name": "block5a_se_squeeze",
                  "inbound_nodes": [
                    [
                      [
                        "block5a_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Reshape",
                  "config": {
                    "name": "block5a_se_reshape",
                    "trainable": true,
                    "dtype": "float32",
                    "target_shape": [
                      1,
                      1,
                      480
                    ]
                  },
                  "name": "block5a_se_reshape",
                  "inbound_nodes": [
                    [
                      [
                        "block5a_se_squeeze",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block5a_se_reduce",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 20,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "swish",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block5a_se_reduce",
                  "inbound_nodes": [
                    [
                      [
                        "block5a_se_reshape",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block5a_se_expand",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 480,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "sigmoid",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block5a_se_expand",
                  "inbound_nodes": [
                    [
                      [
                        "block5a_se_reduce",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Multiply",
                  "config": {
                    "name": "block5a_se_excite",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block5a_se_excite",
                  "inbound_nodes": [
                    [
                      [
                        "block5a_activation",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block5a_se_expand",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block5a_project_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 112,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block5a_project_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block5a_se_excite",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block5a_project_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block5a_project_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block5a_project_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block5b_expand_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 672,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block5b_expand_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block5a_project_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block5b_expand_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block5b_expand_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block5b_expand_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block5b_expand_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block5b_expand_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block5b_expand_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "DepthwiseConv2D",
                  "config": {
                    "name": "block5b_dwconv",
                    "trainable": true,
                    "dtype": "float32",
                    "kernel_size": [
                      5,
                      5
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "bias_constraint": null,
                    "depth_multiplier": 1,
                    "depthwise_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null
                  },
                  "name": "block5b_dwconv",
                  "inbound_nodes": [
                    [
                      [
                        "block5b_expand_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block5b_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block5b_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block5b_dwconv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block5b_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block5b_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block5b_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "GlobalAveragePooling2D",
                  "config": {
                    "name": "block5b_se_squeeze",
                    "trainable": true,
                    "dtype": "float32",
                    "data_format": "channels_last",
                    "keepdims": false
                  },
                  "name": "block5b_se_squeeze",
                  "inbound_nodes": [
                    [
                      [
                        "block5b_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Reshape",
                  "config": {
                    "name": "block5b_se_reshape",
                    "trainable": true,
                    "dtype": "float32",
                    "target_shape": [
                      1,
                      1,
                      672
                    ]
                  },
                  "name": "block5b_se_reshape",
                  "inbound_nodes": [
                    [
                      [
                        "block5b_se_squeeze",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block5b_se_reduce",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 28,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "swish",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block5b_se_reduce",
                  "inbound_nodes": [
                    [
                      [
                        "block5b_se_reshape",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block5b_se_expand",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 672,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "sigmoid",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block5b_se_expand",
                  "inbound_nodes": [
                    [
                      [
                        "block5b_se_reduce",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Multiply",
                  "config": {
                    "name": "block5b_se_excite",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block5b_se_excite",
                  "inbound_nodes": [
                    [
                      [
                        "block5b_activation",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block5b_se_expand",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block5b_project_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 112,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block5b_project_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block5b_se_excite",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block5b_project_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block5b_project_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block5b_project_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Dropout",
                  "config": {
                    "name": "block5b_drop",
                    "trainable": true,
                    "dtype": "float32",
                    "rate": 0.1125,
                    "noise_shape": [
                      null,
                      1,
                      1,
                      1
                    ],
                    "seed": null
                  },
                  "name": "block5b_drop",
                  "inbound_nodes": [
                    [
                      [
                        "block5b_project_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Add",
                  "config": {
                    "name": "block5b_add",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block5b_add",
                  "inbound_nodes": [
                    [
                      [
                        "block5b_drop",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block5a_project_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block5c_expand_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 672,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block5c_expand_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block5b_add",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block5c_expand_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block5c_expand_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block5c_expand_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block5c_expand_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block5c_expand_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block5c_expand_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "DepthwiseConv2D",
                  "config": {
                    "name": "block5c_dwconv",
                    "trainable": true,
                    "dtype": "float32",
                    "kernel_size": [
                      5,
                      5
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "bias_constraint": null,
                    "depth_multiplier": 1,
                    "depthwise_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null
                  },
                  "name": "block5c_dwconv",
                  "inbound_nodes": [
                    [
                      [
                        "block5c_expand_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block5c_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block5c_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block5c_dwconv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block5c_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block5c_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block5c_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "GlobalAveragePooling2D",
                  "config": {
                    "name": "block5c_se_squeeze",
                    "trainable": true,
                    "dtype": "float32",
                    "data_format": "channels_last",
                    "keepdims": false
                  },
                  "name": "block5c_se_squeeze",
                  "inbound_nodes": [
                    [
                      [
                        "block5c_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Reshape",
                  "config": {
                    "name": "block5c_se_reshape",
                    "trainable": true,
                    "dtype": "float32",
                    "target_shape": [
                      1,
                      1,
                      672
                    ]
                  },
                  "name": "block5c_se_reshape",
                  "inbound_nodes": [
                    [
                      [
                        "block5c_se_squeeze",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block5c_se_reduce",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 28,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "swish",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block5c_se_reduce",
                  "inbound_nodes": [
                    [
                      [
                        "block5c_se_reshape",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block5c_se_expand",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 672,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "sigmoid",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block5c_se_expand",
                  "inbound_nodes": [
                    [
                      [
                        "block5c_se_reduce",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Multiply",
                  "config": {
                    "name": "block5c_se_excite",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block5c_se_excite",
                  "inbound_nodes": [
                    [
                      [
                        "block5c_activation",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block5c_se_expand",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block5c_project_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 112,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block5c_project_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block5c_se_excite",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block5c_project_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block5c_project_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block5c_project_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Dropout",
                  "config": {
                    "name": "block5c_drop",
                    "trainable": true,
                    "dtype": "float32",
                    "rate": 0.125,
                    "noise_shape": [
                      null,
                      1,
                      1,
                      1
                    ],
                    "seed": null
                  },
                  "name": "block5c_drop",
                  "inbound_nodes": [
                    [
                      [
                        "block5c_project_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Add",
                  "config": {
                    "name": "block5c_add",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block5c_add",
                  "inbound_nodes": [
                    [
                      [
                        "block5c_drop",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block5b_add",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block6a_expand_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 672,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block6a_expand_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block5c_add",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block6a_expand_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block6a_expand_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block6a_expand_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block6a_expand_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block6a_expand_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block6a_expand_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "ZeroPadding2D",
                  "config": {
                    "name": "block6a_dwconv_pad",
                    "trainable": true,
                    "dtype": "float32",
                    "padding": [
                      [
                        2,
                        2
                      ],
                      [
                        2,
                        2
                      ]
                    ],
                    "data_format": "channels_last"
                  },
                  "name": "block6a_dwconv_pad",
                  "inbound_nodes": [
                    [
                      [
                        "block6a_expand_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "DepthwiseConv2D",
                  "config": {
                    "name": "block6a_dwconv",
                    "trainable": true,
                    "dtype": "float32",
                    "kernel_size": [
                      5,
                      5
                    ],
                    "strides": [
                      2,
                      2
                    ],
                    "padding": "valid",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "bias_constraint": null,
                    "depth_multiplier": 1,
                    "depthwise_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null
                  },
                  "name": "block6a_dwconv",
                  "inbound_nodes": [
                    [
                      [
                        "block6a_dwconv_pad",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block6a_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block6a_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block6a_dwconv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block6a_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block6a_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block6a_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "GlobalAveragePooling2D",
                  "config": {
                    "name": "block6a_se_squeeze",
                    "trainable": true,
                    "dtype": "float32",
                    "data_format": "channels_last",
                    "keepdims": false
                  },
                  "name": "block6a_se_squeeze",
                  "inbound_nodes": [
                    [
                      [
                        "block6a_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Reshape",
                  "config": {
                    "name": "block6a_se_reshape",
                    "trainable": true,
                    "dtype": "float32",
                    "target_shape": [
                      1,
                      1,
                      672
                    ]
                  },
                  "name": "block6a_se_reshape",
                  "inbound_nodes": [
                    [
                      [
                        "block6a_se_squeeze",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block6a_se_reduce",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 28,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "swish",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block6a_se_reduce",
                  "inbound_nodes": [
                    [
                      [
                        "block6a_se_reshape",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block6a_se_expand",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 672,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "sigmoid",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block6a_se_expand",
                  "inbound_nodes": [
                    [
                      [
                        "block6a_se_reduce",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Multiply",
                  "config": {
                    "name": "block6a_se_excite",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block6a_se_excite",
                  "inbound_nodes": [
                    [
                      [
                        "block6a_activation",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block6a_se_expand",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block6a_project_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 192,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block6a_project_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block6a_se_excite",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block6a_project_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block6a_project_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block6a_project_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block6b_expand_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 1152,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block6b_expand_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block6a_project_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block6b_expand_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block6b_expand_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block6b_expand_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block6b_expand_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block6b_expand_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block6b_expand_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "DepthwiseConv2D",
                  "config": {
                    "name": "block6b_dwconv",
                    "trainable": true,
                    "dtype": "float32",
                    "kernel_size": [
                      5,
                      5
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "bias_constraint": null,
                    "depth_multiplier": 1,
                    "depthwise_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null
                  },
                  "name": "block6b_dwconv",
                  "inbound_nodes": [
                    [
                      [
                        "block6b_expand_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block6b_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block6b_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block6b_dwconv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block6b_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block6b_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block6b_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "GlobalAveragePooling2D",
                  "config": {
                    "name": "block6b_se_squeeze",
                    "trainable": true,
                    "dtype": "float32",
                    "data_format": "channels_last",
                    "keepdims": false
                  },
                  "name": "block6b_se_squeeze",
                  "inbound_nodes": [
                    [
                      [
                        "block6b_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Reshape",
                  "config": {
                    "name": "block6b_se_reshape",
                    "trainable": true,
                    "dtype": "float32",
                    "target_shape": [
                      1,
                      1,
                      1152
                    ]
                  },
                  "name": "block6b_se_reshape",
                  "inbound_nodes": [
                    [
                      [
                        "block6b_se_squeeze",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block6b_se_reduce",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 48,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "swish",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block6b_se_reduce",
                  "inbound_nodes": [
                    [
                      [
                        "block6b_se_reshape",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block6b_se_expand",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 1152,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "sigmoid",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block6b_se_expand",
                  "inbound_nodes": [
                    [
                      [
                        "block6b_se_reduce",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Multiply",
                  "config": {
                    "name": "block6b_se_excite",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block6b_se_excite",
                  "inbound_nodes": [
                    [
                      [
                        "block6b_activation",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block6b_se_expand",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block6b_project_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 192,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block6b_project_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block6b_se_excite",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block6b_project_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block6b_project_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block6b_project_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Dropout",
                  "config": {
                    "name": "block6b_drop",
                    "trainable": true,
                    "dtype": "float32",
                    "rate": 0.15000000000000002,
                    "noise_shape": [
                      null,
                      1,
                      1,
                      1
                    ],
                    "seed": null
                  },
                  "name": "block6b_drop",
                  "inbound_nodes": [
                    [
                      [
                        "block6b_project_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Add",
                  "config": {
                    "name": "block6b_add",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block6b_add",
                  "inbound_nodes": [
                    [
                      [
                        "block6b_drop",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block6a_project_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block6c_expand_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 1152,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block6c_expand_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block6b_add",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block6c_expand_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block6c_expand_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block6c_expand_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block6c_expand_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block6c_expand_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block6c_expand_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "DepthwiseConv2D",
                  "config": {
                    "name": "block6c_dwconv",
                    "trainable": true,
                    "dtype": "float32",
                    "kernel_size": [
                      5,
                      5
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "bias_constraint": null,
                    "depth_multiplier": 1,
                    "depthwise_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null
                  },
                  "name": "block6c_dwconv",
                  "inbound_nodes": [
                    [
                      [
                        "block6c_expand_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block6c_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block6c_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block6c_dwconv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block6c_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block6c_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block6c_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "GlobalAveragePooling2D",
                  "config": {
                    "name": "block6c_se_squeeze",
                    "trainable": true,
                    "dtype": "float32",
                    "data_format": "channels_last",
                    "keepdims": false
                  },
                  "name": "block6c_se_squeeze",
                  "inbound_nodes": [
                    [
                      [
                        "block6c_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Reshape",
                  "config": {
                    "name": "block6c_se_reshape",
                    "trainable": true,
                    "dtype": "float32",
                    "target_shape": [
                      1,
                      1,
                      1152
                    ]
                  },
                  "name": "block6c_se_reshape",
                  "inbound_nodes": [
                    [
                      [
                        "block6c_se_squeeze",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block6c_se_reduce",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 48,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "swish",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block6c_se_reduce",
                  "inbound_nodes": [
                    [
                      [
                        "block6c_se_reshape",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block6c_se_expand",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 1152,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "sigmoid",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block6c_se_expand",
                  "inbound_nodes": [
                    [
                      [
                        "block6c_se_reduce",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Multiply",
                  "config": {
                    "name": "block6c_se_excite",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block6c_se_excite",
                  "inbound_nodes": [
                    [
                      [
                        "block6c_activation",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block6c_se_expand",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block6c_project_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 192,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block6c_project_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block6c_se_excite",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block6c_project_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block6c_project_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block6c_project_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Dropout",
                  "config": {
                    "name": "block6c_drop",
                    "trainable": true,
                    "dtype": "float32",
                    "rate": 0.1625,
                    "noise_shape": [
                      null,
                      1,
                      1,
                      1
                    ],
                    "seed": null
                  },
                  "name": "block6c_drop",
                  "inbound_nodes": [
                    [
                      [
                        "block6c_project_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Add",
                  "config": {
                    "name": "block6c_add",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block6c_add",
                  "inbound_nodes": [
                    [
                      [
                        "block6c_drop",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block6b_add",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block6d_expand_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 1152,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block6d_expand_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block6c_add",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block6d_expand_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block6d_expand_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block6d_expand_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block6d_expand_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block6d_expand_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block6d_expand_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "DepthwiseConv2D",
                  "config": {
                    "name": "block6d_dwconv",
                    "trainable": true,
                    "dtype": "float32",
                    "kernel_size": [
                      5,
                      5
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "bias_constraint": null,
                    "depth_multiplier": 1,
                    "depthwise_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null
                  },
                  "name": "block6d_dwconv",
                  "inbound_nodes": [
                    [
                      [
                        "block6d_expand_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block6d_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block6d_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block6d_dwconv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block6d_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block6d_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block6d_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "GlobalAveragePooling2D",
                  "config": {
                    "name": "block6d_se_squeeze",
                    "trainable": true,
                    "dtype": "float32",
                    "data_format": "channels_last",
                    "keepdims": false
                  },
                  "name": "block6d_se_squeeze",
                  "inbound_nodes": [
                    [
                      [
                        "block6d_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Reshape",
                  "config": {
                    "name": "block6d_se_reshape",
                    "trainable": true,
                    "dtype": "float32",
                    "target_shape": [
                      1,
                      1,
                      1152
                    ]
                  },
                  "name": "block6d_se_reshape",
                  "inbound_nodes": [
                    [
                      [
                        "block6d_se_squeeze",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block6d_se_reduce",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 48,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "swish",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block6d_se_reduce",
                  "inbound_nodes": [
                    [
                      [
                        "block6d_se_reshape",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block6d_se_expand",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 1152,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "sigmoid",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block6d_se_expand",
                  "inbound_nodes": [
                    [
                      [
                        "block6d_se_reduce",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Multiply",
                  "config": {
                    "name": "block6d_se_excite",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block6d_se_excite",
                  "inbound_nodes": [
                    [
                      [
                        "block6d_activation",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block6d_se_expand",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block6d_project_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 192,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block6d_project_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block6d_se_excite",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block6d_project_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block6d_project_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block6d_project_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Dropout",
                  "config": {
                    "name": "block6d_drop",
                    "trainable": true,
                    "dtype": "float32",
                    "rate": 0.17500000000000002,
                    "noise_shape": [
                      null,
                      1,
                      1,
                      1
                    ],
                    "seed": null
                  },
                  "name": "block6d_drop",
                  "inbound_nodes": [
                    [
                      [
                        "block6d_project_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Add",
                  "config": {
                    "name": "block6d_add",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block6d_add",
                  "inbound_nodes": [
                    [
                      [
                        "block6d_drop",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block6c_add",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block7a_expand_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 1152,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block7a_expand_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block6d_add",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block7a_expand_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block7a_expand_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block7a_expand_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block7a_expand_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block7a_expand_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block7a_expand_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "DepthwiseConv2D",
                  "config": {
                    "name": "block7a_dwconv",
                    "trainable": true,
                    "dtype": "float32",
                    "kernel_size": [
                      3,
                      3
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "bias_constraint": null,
                    "depth_multiplier": 1,
                    "depthwise_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "depthwise_regularizer": null,
                    "depthwise_constraint": null
                  },
                  "name": "block7a_dwconv",
                  "inbound_nodes": [
                    [
                      [
                        "block7a_expand_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block7a_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block7a_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block7a_dwconv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "block7a_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "block7a_activation",
                  "inbound_nodes": [
                    [
                      [
                        "block7a_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "GlobalAveragePooling2D",
                  "config": {
                    "name": "block7a_se_squeeze",
                    "trainable": true,
                    "dtype": "float32",
                    "data_format": "channels_last",
                    "keepdims": false
                  },
                  "name": "block7a_se_squeeze",
                  "inbound_nodes": [
                    [
                      [
                        "block7a_activation",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Reshape",
                  "config": {
                    "name": "block7a_se_reshape",
                    "trainable": true,
                    "dtype": "float32",
                    "target_shape": [
                      1,
                      1,
                      1152
                    ]
                  },
                  "name": "block7a_se_reshape",
                  "inbound_nodes": [
                    [
                      [
                        "block7a_se_squeeze",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block7a_se_reduce",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 48,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "swish",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block7a_se_reduce",
                  "inbound_nodes": [
                    [
                      [
                        "block7a_se_reshape",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block7a_se_expand",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 1152,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "sigmoid",
                    "use_bias": true,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block7a_se_expand",
                  "inbound_nodes": [
                    [
                      [
                        "block7a_se_reduce",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Multiply",
                  "config": {
                    "name": "block7a_se_excite",
                    "trainable": true,
                    "dtype": "float32"
                  },
                  "name": "block7a_se_excite",
                  "inbound_nodes": [
                    [
                      [
                        "block7a_activation",
                        0,
                        0,
                        {}
                      ],
                      [
                        "block7a_se_expand",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "block7a_project_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 320,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "block7a_project_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block7a_se_excite",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "block7a_project_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "block7a_project_bn",
                  "inbound_nodes": [
                    [
                      [
                        "block7a_project_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Conv2D",
                  "config": {
                    "name": "top_conv",
                    "trainable": true,
                    "dtype": "float32",
                    "filters": 1280,
                    "kernel_size": [
                      1,
                      1
                    ],
                    "strides": [
                      1,
                      1
                    ],
                    "padding": "same",
                    "data_format": "channels_last",
                    "dilation_rate": [
                      1,
                      1
                    ],
                    "groups": 1,
                    "activation": "linear",
                    "use_bias": false,
                    "kernel_initializer": {
                      "class_name": "VarianceScaling",
                      "config": {
                        "scale": 2,
                        "mode": "fan_out",
                        "distribution": "truncated_normal",
                        "seed": null
                      }
                    },
                    "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "kernel_regularizer": null,
                    "bias_regularizer": null,
                    "activity_regularizer": null,
                    "kernel_constraint": null,
                    "bias_constraint": null
                  },
                  "name": "top_conv",
                  "inbound_nodes": [
                    [
                      [
                        "block7a_project_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "BatchNormalization",
                  "config": {
                    "name": "top_bn",
                    "trainable": true,
                    "dtype": "float32",
                    "axis": [
                      3
                    ],
                    "momentum": 0.99,
                    "epsilon": 0.001,
                    "center": true,
                    "scale": true,
                    "beta_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "gamma_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "moving_mean_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                    },
                    "moving_variance_initializer": {
                      "class_name": "Ones",
                      "config": {}
                    },
                    "beta_regularizer": null,
                    "gamma_regularizer": null,
                    "beta_constraint": null,
                    "gamma_constraint": null
                  },
                  "name": "top_bn",
                  "inbound_nodes": [
                    [
                      [
                        "top_conv",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                },
                {
                  "class_name": "Activation",
                  "config": {
                    "name": "top_activation",
                    "trainable": true,
                    "dtype": "float32",
                    "activation": "swish"
                  },
                  "name": "top_activation",
                  "inbound_nodes": [
                    [
                      [
                        "top_bn",
                        0,
                        0,
                        {}
                      ]
                    ]
                  ]
                }
              ],
              "input_layers": [
                [
                  "input_1",
                  0,
                  0
                ]
              ],
              "output_layers": [
                [
                  "top_activation",
                  0,
                  0
                ]
              ]
            }
          },
          {
            "class_name": "GlobalAveragePooling2D",
            "config": {
              "name": "global_average_pooling2d",
              "trainable": true,
              "dtype": "float32",
              "data_format": "channels_last",
              "keepdims": false
            }
          },
          {
            "class_name": "Dense",
            "config": {
              "name": "dense",
              "trainable": true,
              "dtype": "float32",
              "units": 5,
              "activation": "softmax",
              "use_bias": true,
              "kernel_initializer": {
                "class_name": "GlorotUniform",
                "config": {
                  "seed": null
                }
              },
              "bias_initializer": {
                "class_name": "Zeros",
                "config": {}
              },
              "kernel_regularizer": null,
              "bias_regularizer": null,
              "activity_regularizer": null,
              "kernel_constraint": null,
              "bias_constraint": null
            }
          }
        ]
      }
    },
    "training_config": {
      "loss": "categorical_crossentropy",
      "metrics": [
        [
          {
            "class_name": "MeanMetricWrapper",
            "config": {
              "name": "accuracy",
              "dtype": "float32",
              "fn": "categorical_accuracy"
            }
          }
        ]
      ],
      "weighted_metrics": null,
      "loss_weights": null,
      "optimizer_config": {
        "class_name": "Adam",
        "config": {
          "name": "Adam",
          "learning_rate": 0.0010000000474974513,
          "decay": 0,
          "beta_1": 0.8999999761581421,
          "beta_2": 0.9990000128746033,
          "epsilon": 1e-7,
          "amsgrad": false
        }
      }
    }
  },
  "weightsManifest": [
    {
      "paths": [
        "group1-shard1of4.bin",
        "group1-shard2of4.bin",
        "group1-shard3of4.bin",
        "group1-shard4of4.bin"
      ],
      "weights": [
        {
          "name": "dense/kernel",
          "shape": [
            1280,
            5
          ],
          "dtype": "float32"
        },
        {
          "name": "dense/bias",
          "shape": [
            5
          ],
          "dtype": "float32"
        },
        {
          "name": "stem_conv/kernel",
          "shape": [
            3,
            3,
            3,
            32
          ],
          "dtype": "float32"
        },
        {
          "name": "stem_bn/gamma",
          "shape": [
            32
          ],
          "dtype": "float32"
        },
        {
          "name": "stem_bn/beta",
          "shape": [
            32
          ],
          "dtype": "float32"
        },
        {
          "name": "block1a_dwconv/depthwise_kernel",
          "shape": [
            3,
            3,
            32,
            1
          ],
          "dtype": "float32"
        },
        {
          "name": "block1a_bn/gamma",
          "shape": [
            32
          ],
          "dtype": "float32"
        },
        {
          "name": "block1a_bn/beta",
          "shape": [
            32
          ],
          "dtype": "float32"
        },
        {
          "name": "block1a_se_reduce/kernel",
          "shape": [
            1,
            1,
            32,
            8
          ],
          "dtype": "float32"
        },
        {
          "name": "block1a_se_reduce/bias",
          "shape": [
            8
          ],
          "dtype": "float32"
        },
        {
          "name": "block1a_se_expand/kernel",
          "shape": [
            1,
            1,
            8,
            32
          ],
          "dtype": "float32"
        },
        {
          "name": "block1a_se_expand/bias",
          "shape": [
            32
          ],
          "dtype": "float32"
        },
        {
          "name": "block1a_project_conv/kernel",
          "shape": [
            1,
            1,
            32,
            16
          ],
          "dtype": "float32"
        },
        {
          "name": "block1a_project_bn/gamma",
          "shape": [
            16
          ],
          "dtype": "float32"
        },
        {
          "name": "block1a_project_bn/beta",
          "shape": [
            16
          ],
          "dtype": "float32"
        },
        {
          "name": "block2a_expand_conv/kernel",
          "shape": [
            1,
            1,
            16,
            96
          ],
          "dtype": "float32"
        },
        {
          "name": "block2a_expand_bn/gamma",
          "shape": [
            96
          ],
          "dtype": "float32"
        },
        {
          "name": "block2a_expand_bn/beta",
          "shape": [
            96
          ],
          "dtype": "float32"
        },
        {
          "name": "block2a_dwconv/depthwise_kernel",
          "shape": [
            3,
            3,
            96,
            1
          ],
          "dtype": "float32"
        },
        {
          "name": "block2a_bn/gamma",
          "shape": [
            96
          ],
          "dtype": "float32"
        },
        {
          "name": "block2a_bn/beta",
          "shape": [
            96
          ],
          "dtype": "float32"
        },
        {
          "name": "block2a_se_reduce/kernel",
          "shape": [
            1,
            1,
            96,
            4
          ],
          "dtype": "float32"
        },
        {
          "name": "block2a_se_reduce/bias",
          "shape": [
            4
          ],
          "dtype": "float32"
        },
        {
          "name": "block2a_se_expand/kernel",
          "shape": [
            1,
            1,
            4,
            96
          ],
          "dtype": "float32"
        },
        {
          "name": "block2a_se_expand/bias",
          "shape": [
            96
          ],
          "dtype": "float32"
        },
        {
          "name": "block2a_project_conv/kernel",
          "shape": [
            1,
            1,
            96,
            24
          ],
          "dtype": "float32"
        },
        {
          "name": "block2a_project_bn/gamma",
          "shape": [
            24
          ],
          "dtype": "float32"
        },
        {
          "name": "block2a_project_bn/beta",
          "shape": [
            24
          ],
          "dtype": "float32"
        },
        {
          "name": "block2b_expand_conv/kernel",
          "shape": [
            1,
            1,
            24,
            144
          ],
          "dtype": "float32"
        },
        {
          "name": "block2b_expand_bn/gamma",
          "shape": [
            144
          ],
          "dtype": "float32"
        },
        {
          "name": "block2b_expand_bn/beta",
          "shape": [
            144
          ],
          "dtype": "float32"
        },
        {
          "name": "block2b_dwconv/depthwise_kernel",
          "shape": [
            3,
            3,
            144,
            1
          ],
          "dtype": "float32"
        },
        {
          "name": "block2b_bn/gamma",
          "shape": [
            144
          ],
          "dtype": "float32"
        },
        {
          "name": "block2b_bn/beta",
          "shape": [
            144
          ],
          "dtype": "float32"
        },
        {
          "name": "block2b_se_reduce/kernel",
          "shape": [
            1,
            1,
            144,
            6
          ],
          "dtype": "float32"
        },
        {
          "name": "block2b_se_reduce/bias",
          "shape": [
            6
          ],
          "dtype": "float32"
        },
        {
          "name": "block2b_se_expand/kernel",
          "shape": [
            1,
            1,
            6,
            144
          ],
          "dtype": "float32"
        },
        {
          "name": "block2b_se_expand/bias",
          "shape": [
            144
          ],
          "dtype": "float32"
        },
        {
          "name": "block2b_project_conv/kernel",
          "shape": [
            1,
            1,
            144,
            24
          ],
          "dtype": "float32"
        },
        {
          "name": "block2b_project_bn/gamma",
          "shape": [
            24
          ],
          "dtype": "float32"
        },
        {
          "name": "block2b_project_bn/beta",
          "shape": [
            24
          ],
          "dtype": "float32"
        },
        {
          "name": "block3a_expand_conv/kernel",
          "shape": [
            1,
            1,
            24,
            144
          ],
          "dtype": "float32"
        },
        {
          "name": "block3a_expand_bn/gamma",
          "shape": [
            144
          ],
          "dtype": "float32"
        },
        {
          "name": "block3a_expand_bn/beta",
          "shape": [
            144
          ],
          "dtype": "float32"
        },
        {
          "name": "block3a_dwconv/depthwise_kernel",
          "shape": [
            5,
            5,
            144,
            1
          ],
          "dtype": "float32"
        },
        {
          "name": "block3a_bn/gamma",
          "shape": [
            144
          ],
          "dtype": "float32"
        },
        {
          "name": "block3a_bn/beta",
          "shape": [
            144
          ],
          "dtype": "float32"
        },
        {
          "name": "block3a_se_reduce/kernel",
          "shape": [
            1,
            1,
            144,
            6
          ],
          "dtype": "float32"
        },
        {
          "name": "block3a_se_reduce/bias",
          "shape": [
            6
          ],
          "dtype": "float32"
        },
        {
          "name": "block3a_se_expand/kernel",
          "shape": [
            1,
            1,
            6,
            144
          ],
          "dtype": "float32"
        },
        {
          "name": "block3a_se_expand/bias",
          "shape": [
            144
          ],
          "dtype": "float32"
        },
        {
          "name": "block3a_project_conv/kernel",
          "shape": [
            1,
            1,
            144,
            40
          ],
          "dtype": "float32"
        },
        {
          "name": "block3a_project_bn/gamma",
          "shape": [
            40
          ],
          "dtype": "float32"
        },
        {
          "name": "block3a_project_bn/beta",
          "shape": [
            40
          ],
          "dtype": "float32"
        },
        {
          "name": "block3b_expand_conv/kernel",
          "shape": [
            1,
            1,
            40,
            240
          ],
          "dtype": "float32"
        },
        {
          "name": "block3b_expand_bn/gamma",
          "shape": [
            240
          ],
          "dtype": "float32"
        },
        {
          "name": "block3b_expand_bn/beta",
          "shape": [
            240
          ],
          "dtype": "float32"
        },
        {
          "name": "block3b_dwconv/depthwise_kernel",
          "shape": [
            5,
            5,
            240,
            1
          ],
          "dtype": "float32"
        },
        {
          "name": "block3b_bn/gamma",
          "shape": [
            240
          ],
          "dtype": "float32"
        },
        {
          "name": "block3b_bn/beta",
          "shape": [
            240
          ],
          "dtype": "float32"
        },
        {
          "name": "block3b_se_reduce/kernel",
          "shape": [
            1,
            1,
            240,
            10
          ],
          "dtype": "float32"
        },
        {
          "name": "block3b_se_reduce/bias",
          "shape": [
            10
          ],
          "dtype": "float32"
        },
        {
          "name": "block3b_se_expand/kernel",
          "shape": [
            1,
            1,
            10,
            240
          ],
          "dtype": "float32"
        },
        {
          "name": "block3b_se_expand/bias",
          "shape": [
            240
          ],
          "dtype": "float32"
        },
        {
          "name": "block3b_project_conv/kernel",
          "shape": [
            1,
            1,
            240,
            40
          ],
          "dtype": "float32"
        },
        {
          "name": "block3b_project_bn/gamma",
          "shape": [
            40
          ],
          "dtype": "float32"
        },
        {
          "name": "block3b_project_bn/beta",
          "shape": [
            40
          ],
          "dtype": "float32"
        },
        {
          "name": "block4a_expand_conv/kernel",
          "shape": [
            1,
            1,
            40,
            240
          ],
          "dtype": "float32"
        },
        {
          "name": "block4a_expand_bn/gamma",
          "shape": [
            240
          ],
          "dtype": "float32"
        },
        {
          "name": "block4a_expand_bn/beta",
          "shape": [
            240
          ],
          "dtype": "float32"
        },
        {
          "name": "block4a_dwconv/depthwise_kernel",
          "shape": [
            3,
            3,
            240,
            1
          ],
          "dtype": "float32"
        },
        {
          "name": "block4a_bn/gamma",
          "shape": [
            240
          ],
          "dtype": "float32"
        },
        {
          "name": "block4a_bn/beta",
          "shape": [
            240
          ],
          "dtype": "float32"
        },
        {
          "name": "block4a_se_reduce/kernel",
          "shape": [
            1,
            1,
            240,
            10
          ],
          "dtype": "float32"
        },
        {
          "name": "block4a_se_reduce/bias",
          "shape": [
            10
          ],
          "dtype": "float32"
        },
        {
          "name": "block4a_se_expand/kernel",
          "shape": [
            1,
            1,
            10,
            240
          ],
          "dtype": "float32"
        },
        {
          "name": "block4a_se_expand/bias",
          "shape": [
            240
          ],
          "dtype": "float32"
        },
        {
          "name": "block4a_project_conv/kernel",
          "shape": [
            1,
            1,
            240,
            80
          ],
          "dtype": "float32"
        },
        {
          "name": "block4a_project_bn/gamma",
          "shape": [
            80
          ],
          "dtype": "float32"
        },
        {
          "name": "block4a_project_bn/beta",
          "shape": [
            80
          ],
          "dtype": "float32"
        },
        {
          "name": "block4b_expand_conv/kernel",
          "shape": [
            1,
            1,
            80,
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block4b_expand_bn/gamma",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block4b_expand_bn/beta",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block4b_dwconv/depthwise_kernel",
          "shape": [
            3,
            3,
            480,
            1
          ],
          "dtype": "float32"
        },
        {
          "name": "block4b_bn/gamma",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block4b_bn/beta",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block4b_se_reduce/kernel",
          "shape": [
            1,
            1,
            480,
            20
          ],
          "dtype": "float32"
        },
        {
          "name": "block4b_se_reduce/bias",
          "shape": [
            20
          ],
          "dtype": "float32"
        },
        {
          "name": "block4b_se_expand/kernel",
          "shape": [
            1,
            1,
            20,
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block4b_se_expand/bias",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block4b_project_conv/kernel",
          "shape": [
            1,
            1,
            480,
            80
          ],
          "dtype": "float32"
        },
        {
          "name": "block4b_project_bn/gamma",
          "shape": [
            80
          ],
          "dtype": "float32"
        },
        {
          "name": "block4b_project_bn/beta",
          "shape": [
            80
          ],
          "dtype": "float32"
        },
        {
          "name": "block4c_expand_conv/kernel",
          "shape": [
            1,
            1,
            80,
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block4c_expand_bn/gamma",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block4c_expand_bn/beta",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block4c_dwconv/depthwise_kernel",
          "shape": [
            3,
            3,
            480,
            1
          ],
          "dtype": "float32"
        },
        {
          "name": "block4c_bn/gamma",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block4c_bn/beta",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block4c_se_reduce/kernel",
          "shape": [
            1,
            1,
            480,
            20
          ],
          "dtype": "float32"
        },
        {
          "name": "block4c_se_reduce/bias",
          "shape": [
            20
          ],
          "dtype": "float32"
        },
        {
          "name": "block4c_se_expand/kernel",
          "shape": [
            1,
            1,
            20,
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block4c_se_expand/bias",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block4c_project_conv/kernel",
          "shape": [
            1,
            1,
            480,
            80
          ],
          "dtype": "float32"
        },
        {
          "name": "block4c_project_bn/gamma",
          "shape": [
            80
          ],
          "dtype": "float32"
        },
        {
          "name": "block4c_project_bn/beta",
          "shape": [
            80
          ],
          "dtype": "float32"
        },
        {
          "name": "block5a_expand_conv/kernel",
          "shape": [
            1,
            1,
            80,
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block5a_expand_bn/gamma",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block5a_expand_bn/beta",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block5a_dwconv/depthwise_kernel",
          "shape": [
            5,
            5,
            480,
            1
          ],
          "dtype": "float32"
        },
        {
          "name": "block5a_bn/gamma",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block5a_bn/beta",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block5a_se_reduce/kernel",
          "shape": [
            1,
            1,
            480,
            20
          ],
          "dtype": "float32"
        },
        {
          "name": "block5a_se_reduce/bias",
          "shape": [
            20
          ],
          "dtype": "float32"
        },
        {
          "name": "block5a_se_expand/kernel",
          "shape": [
            1,
            1,
            20,
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block5a_se_expand/bias",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block5a_project_conv/kernel",
          "shape": [
            1,
            1,
            480,
            112
          ],
          "dtype": "float32"
        },
        {
          "name": "block5a_project_bn/gamma",
          "shape": [
            112
          ],
          "dtype": "float32"
        },
        {
          "name": "block5a_project_bn/beta",
          "shape": [
            112
          ],
          "dtype": "float32"
        },
        {
          "name": "block5b_expand_conv/kernel",
          "shape": [
            1,
            1,
            112,
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block5b_expand_bn/gamma",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block5b_expand_bn/beta",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block5b_dwconv/depthwise_kernel",
          "shape": [
            5,
            5,
            672,
            1
          ],
          "dtype": "float32"
        },
        {
          "name": "block5b_bn/gamma",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block5b_bn/beta",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block5b_se_reduce/kernel",
          "shape": [
            1,
            1,
            672,
            28
          ],
          "dtype": "float32"
        },
        {
          "name": "block5b_se_reduce/bias",
          "shape": [
            28
          ],
          "dtype": "float32"
        },
        {
          "name": "block5b_se_expand/kernel",
          "shape": [
            1,
            1,
            28,
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block5b_se_expand/bias",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block5b_project_conv/kernel",
          "shape": [
            1,
            1,
            672,
            112
          ],
          "dtype": "float32"
        },
        {
          "name": "block5b_project_bn/gamma",
          "shape": [
            112
          ],
          "dtype": "float32"
        },
        {
          "name": "block5b_project_bn/beta",
          "shape": [
            112
          ],
          "dtype": "float32"
        },
        {
          "name": "block5c_expand_conv/kernel",
          "shape": [
            1,
            1,
            112,
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block5c_expand_bn/gamma",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block5c_expand_bn/beta",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block5c_dwconv/depthwise_kernel",
          "shape": [
            5,
            5,
            672,
            1
          ],
          "dtype": "float32"
        },
        {
          "name": "block5c_bn/gamma",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block5c_bn/beta",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block5c_se_reduce/kernel",
          "shape": [
            1,
            1,
            672,
            28
          ],
          "dtype": "float32"
        },
        {
          "name": "block5c_se_reduce/bias",
          "shape": [
            28
          ],
          "dtype": "float32"
        },
        {
          "name": "block5c_se_expand/kernel",
          "shape": [
            1,
            1,
            28,
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block5c_se_expand/bias",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block5c_project_conv/kernel",
          "shape": [
            1,
            1,
            672,
            112
          ],
          "dtype": "float32"
        },
        {
          "name": "block5c_project_bn/gamma",
          "shape": [
            112
          ],
          "dtype": "float32"
        },
        {
          "name": "block5c_project_bn/beta",
          "shape": [
            112
          ],
          "dtype": "float32"
        },
        {
          "name": "block6a_expand_conv/kernel",
          "shape": [
            1,
            1,
            112,
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block6a_expand_bn/gamma",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block6a_expand_bn/beta",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block6a_dwconv/depthwise_kernel",
          "shape": [
            5,
            5,
            672,
            1
          ],
          "dtype": "float32"
        },
        {
          "name": "block6a_bn/gamma",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block6a_bn/beta",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block6a_se_reduce/kernel",
          "shape": [
            1,
            1,
            672,
            28
          ],
          "dtype": "float32"
        },
        {
          "name": "block6a_se_reduce/bias",
          "shape": [
            28
          ],
          "dtype": "float32"
        },
        {
          "name": "block6a_se_expand/kernel",
          "shape": [
            1,
            1,
            28,
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block6a_se_expand/bias",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block6a_project_conv/kernel",
          "shape": [
            1,
            1,
            672,
            192
          ],
          "dtype": "float32"
        },
        {
          "name": "block6a_project_bn/gamma",
          "shape": [
            192
          ],
          "dtype": "float32"
        },
        {
          "name": "block6a_project_bn/beta",
          "shape": [
            192
          ],
          "dtype": "float32"
        },
        {
          "name": "block6b_expand_conv/kernel",
          "shape": [
            1,
            1,
            192,
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6b_expand_bn/gamma",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6b_expand_bn/beta",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6b_dwconv/depthwise_kernel",
          "shape": [
            5,
            5,
            1152,
            1
          ],
          "dtype": "float32"
        },
        {
          "name": "block6b_bn/gamma",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6b_bn/beta",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6b_se_reduce/kernel",
          "shape": [
            1,
            1,
            1152,
            48
          ],
          "dtype": "float32"
        },
        {
          "name": "block6b_se_reduce/bias",
          "shape": [
            48
          ],
          "dtype": "float32"
        },
        {
          "name": "block6b_se_expand/kernel",
          "shape": [
            1,
            1,
            48,
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6b_se_expand/bias",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6b_project_conv/kernel",
          "shape": [
            1,
            1,
            1152,
            192
          ],
          "dtype": "float32"
        },
        {
          "name": "block6b_project_bn/gamma",
          "shape": [
            192
          ],
          "dtype": "float32"
        },
        {
          "name": "block6b_project_bn/beta",
          "shape": [
            192
          ],
          "dtype": "float32"
        },
        {
          "name": "block6c_expand_conv/kernel",
          "shape": [
            1,
            1,
            192,
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6c_expand_bn/gamma",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6c_expand_bn/beta",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6c_dwconv/depthwise_kernel",
          "shape": [
            5,
            5,
            1152,
            1
          ],
          "dtype": "float32"
        },
        {
          "name": "block6c_bn/gamma",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6c_bn/beta",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6c_se_reduce/kernel",
          "shape": [
            1,
            1,
            1152,
            48
          ],
          "dtype": "float32"
        },
        {
          "name": "block6c_se_reduce/bias",
          "shape": [
            48
          ],
          "dtype": "float32"
        },
        {
          "name": "block6c_se_expand/kernel",
          "shape": [
            1,
            1,
            48,
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6c_se_expand/bias",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6c_project_conv/kernel",
          "shape": [
            1,
            1,
            1152,
            192
          ],
          "dtype": "float32"
        },
        {
          "name": "block6c_project_bn/gamma",
          "shape": [
            192
          ],
          "dtype": "float32"
        },
        {
          "name": "block6c_project_bn/beta",
          "shape": [
            192
          ],
          "dtype": "float32"
        },
        {
          "name": "block6d_expand_conv/kernel",
          "shape": [
            1,
            1,
            192,
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6d_expand_bn/gamma",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6d_expand_bn/beta",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6d_dwconv/depthwise_kernel",
          "shape": [
            5,
            5,
            1152,
            1
          ],
          "dtype": "float32"
        },
        {
          "name": "block6d_bn/gamma",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6d_bn/beta",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6d_se_reduce/kernel",
          "shape": [
            1,
            1,
            1152,
            48
          ],
          "dtype": "float32"
        },
        {
          "name": "block6d_se_reduce/bias",
          "shape": [
            48
          ],
          "dtype": "float32"
        },
        {
          "name": "block6d_se_expand/kernel",
          "shape": [
            1,
            1,
            48,
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6d_se_expand/bias",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6d_project_conv/kernel",
          "shape": [
            1,
            1,
            1152,
            192
          ],
          "dtype": "float32"
        },
        {
          "name": "block6d_project_bn/gamma",
          "shape": [
            192
          ],
          "dtype": "float32"
        },
        {
          "name": "block6d_project_bn/beta",
          "shape": [
            192
          ],
          "dtype": "float32"
        },
        {
          "name": "block7a_expand_conv/kernel",
          "shape": [
            1,
            1,
            192,
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block7a_expand_bn/gamma",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block7a_expand_bn/beta",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block7a_dwconv/depthwise_kernel",
          "shape": [
            3,
            3,
            1152,
            1
          ],
          "dtype": "float32"
        },
        {
          "name": "block7a_bn/gamma",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block7a_bn/beta",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block7a_se_reduce/kernel",
          "shape": [
            1,
            1,
            1152,
            48
          ],
          "dtype": "float32"
        },
        {
          "name": "block7a_se_reduce/bias",
          "shape": [
            48
          ],
          "dtype": "float32"
        },
        {
          "name": "block7a_se_expand/kernel",
          "shape": [
            1,
            1,
            48,
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block7a_se_expand/bias",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block7a_project_conv/kernel",
          "shape": [
            1,
            1,
            1152,
            320
          ],
          "dtype": "float32"
        },
        {
          "name": "block7a_project_bn/gamma",
          "shape": [
            320
          ],
          "dtype": "float32"
        },
        {
          "name": "block7a_project_bn/beta",
          "shape": [
            320
          ],
          "dtype": "float32"
        },
        {
          "name": "top_conv/kernel",
          "shape": [
            1,
            1,
            320,
            1280
          ],
          "dtype": "float32"
        },
        {
          "name": "top_bn/gamma",
          "shape": [
            1280
          ],
          "dtype": "float32"
        },
        {
          "name": "top_bn/beta",
          "shape": [
            1280
          ],
          "dtype": "float32"
        },
        {
          "name": "normalization/mean",
          "shape": [
            3
          ],
          "dtype": "float32"
        },
        {
          "name": "normalization/variance",
          "shape": [
            3
          ],
          "dtype": "float32"
        },
        {
          "name": "normalization/count",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "stem_bn/moving_mean",
          "shape": [
            32
          ],
          "dtype": "float32"
        },
        {
          "name": "stem_bn/moving_variance",
          "shape": [
            32
          ],
          "dtype": "float32"
        },
        {
          "name": "block1a_bn/moving_mean",
          "shape": [
            32
          ],
          "dtype": "float32"
        },
        {
          "name": "block1a_bn/moving_variance",
          "shape": [
            32
          ],
          "dtype": "float32"
        },
        {
          "name": "block1a_project_bn/moving_mean",
          "shape": [
            16
          ],
          "dtype": "float32"
        },
        {
          "name": "block1a_project_bn/moving_variance",
          "shape": [
            16
          ],
          "dtype": "float32"
        },
        {
          "name": "block2a_expand_bn/moving_mean",
          "shape": [
            96
          ],
          "dtype": "float32"
        },
        {
          "name": "block2a_expand_bn/moving_variance",
          "shape": [
            96
          ],
          "dtype": "float32"
        },
        {
          "name": "block2a_bn/moving_mean",
          "shape": [
            96
          ],
          "dtype": "float32"
        },
        {
          "name": "block2a_bn/moving_variance",
          "shape": [
            96
          ],
          "dtype": "float32"
        },
        {
          "name": "block2a_project_bn/moving_mean",
          "shape": [
            24
          ],
          "dtype": "float32"
        },
        {
          "name": "block2a_project_bn/moving_variance",
          "shape": [
            24
          ],
          "dtype": "float32"
        },
        {
          "name": "block2b_expand_bn/moving_mean",
          "shape": [
            144
          ],
          "dtype": "float32"
        },
        {
          "name": "block2b_expand_bn/moving_variance",
          "shape": [
            144
          ],
          "dtype": "float32"
        },
        {
          "name": "block2b_bn/moving_mean",
          "shape": [
            144
          ],
          "dtype": "float32"
        },
        {
          "name": "block2b_bn/moving_variance",
          "shape": [
            144
          ],
          "dtype": "float32"
        },
        {
          "name": "block2b_project_bn/moving_mean",
          "shape": [
            24
          ],
          "dtype": "float32"
        },
        {
          "name": "block2b_project_bn/moving_variance",
          "shape": [
            24
          ],
          "dtype": "float32"
        },
        {
          "name": "block3a_expand_bn/moving_mean",
          "shape": [
            144
          ],
          "dtype": "float32"
        },
        {
          "name": "block3a_expand_bn/moving_variance",
          "shape": [
            144
          ],
          "dtype": "float32"
        },
        {
          "name": "block3a_bn/moving_mean",
          "shape": [
            144
          ],
          "dtype": "float32"
        },
        {
          "name": "block3a_bn/moving_variance",
          "shape": [
            144
          ],
          "dtype": "float32"
        },
        {
          "name": "block3a_project_bn/moving_mean",
          "shape": [
            40
          ],
          "dtype": "float32"
        },
        {
          "name": "block3a_project_bn/moving_variance",
          "shape": [
            40
          ],
          "dtype": "float32"
        },
        {
          "name": "block3b_expand_bn/moving_mean",
          "shape": [
            240
          ],
          "dtype": "float32"
        },
        {
          "name": "block3b_expand_bn/moving_variance",
          "shape": [
            240
          ],
          "dtype": "float32"
        },
        {
          "name": "block3b_bn/moving_mean",
          "shape": [
            240
          ],
          "dtype": "float32"
        },
        {
          "name": "block3b_bn/moving_variance",
          "shape": [
            240
          ],
          "dtype": "float32"
        },
        {
          "name": "block3b_project_bn/moving_mean",
          "shape": [
            40
          ],
          "dtype": "float32"
        },
        {
          "name": "block3b_project_bn/moving_variance",
          "shape": [
            40
          ],
          "dtype": "float32"
        },
        {
          "name": "block4a_expand_bn/moving_mean",
          "shape": [
            240
          ],
          "dtype": "float32"
        },
        {
          "name": "block4a_expand_bn/moving_variance",
          "shape": [
            240
          ],
          "dtype": "float32"
        },
        {
          "name": "block4a_bn/moving_mean",
          "shape": [
            240
          ],
          "dtype": "float32"
        },
        {
          "name": "block4a_bn/moving_variance",
          "shape": [
            240
          ],
          "dtype": "float32"
        },
        {
          "name": "block4a_project_bn/moving_mean",
          "shape": [
            80
          ],
          "dtype": "float32"
        },
        {
          "name": "block4a_project_bn/moving_variance",
          "shape": [
            80
          ],
          "dtype": "float32"
        },
        {
          "name": "block4b_expand_bn/moving_mean",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block4b_expand_bn/moving_variance",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block4b_bn/moving_mean",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block4b_bn/moving_variance",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block4b_project_bn/moving_mean",
          "shape": [
            80
          ],
          "dtype": "float32"
        },
        {
          "name": "block4b_project_bn/moving_variance",
          "shape": [
            80
          ],
          "dtype": "float32"
        },
        {
          "name": "block4c_expand_bn/moving_mean",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block4c_expand_bn/moving_variance",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block4c_bn/moving_mean",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block4c_bn/moving_variance",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block4c_project_bn/moving_mean",
          "shape": [
            80
          ],
          "dtype": "float32"
        },
        {
          "name": "block4c_project_bn/moving_variance",
          "shape": [
            80
          ],
          "dtype": "float32"
        },
        {
          "name": "block5a_expand_bn/moving_mean",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block5a_expand_bn/moving_variance",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block5a_bn/moving_mean",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block5a_bn/moving_variance",
          "shape": [
            480
          ],
          "dtype": "float32"
        },
        {
          "name": "block5a_project_bn/moving_mean",
          "shape": [
            112
          ],
          "dtype": "float32"
        },
        {
          "name": "block5a_project_bn/moving_variance",
          "shape": [
            112
          ],
          "dtype": "float32"
        },
        {
          "name": "block5b_expand_bn/moving_mean",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block5b_expand_bn/moving_variance",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block5b_bn/moving_mean",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block5b_bn/moving_variance",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block5b_project_bn/moving_mean",
          "shape": [
            112
          ],
          "dtype": "float32"
        },
        {
          "name": "block5b_project_bn/moving_variance",
          "shape": [
            112
          ],
          "dtype": "float32"
        },
        {
          "name": "block5c_expand_bn/moving_mean",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block5c_expand_bn/moving_variance",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block5c_bn/moving_mean",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block5c_bn/moving_variance",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block5c_project_bn/moving_mean",
          "shape": [
            112
          ],
          "dtype": "float32"
        },
        {
          "name": "block5c_project_bn/moving_variance",
          "shape": [
            112
          ],
          "dtype": "float32"
        },
        {
          "name": "block6a_expand_bn/moving_mean",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block6a_expand_bn/moving_variance",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block6a_bn/moving_mean",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block6a_bn/moving_variance",
          "shape": [
            672
          ],
          "dtype": "float32"
        },
        {
          "name": "block6a_project_bn/moving_mean",
          "shape": [
            192
          ],
          "dtype": "float32"
        },
        {
          "name": "block6a_project_bn/moving_variance",
          "shape": [
            192
          ],
          "dtype": "float32"
        },
        {
          "name": "block6b_expand_bn/moving_mean",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6b_expand_bn/moving_variance",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6b_bn/moving_mean",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6b_bn/moving_variance",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6b_project_bn/moving_mean",
          "shape": [
            192
          ],
          "dtype": "float32"
        },
        {
          "name": "block6b_project_bn/moving_variance",
          "shape": [
            192
          ],
          "dtype": "float32"
        },
        {
          "name": "block6c_expand_bn/moving_mean",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6c_expand_bn/moving_variance",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6c_bn/moving_mean",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6c_bn/moving_variance",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6c_project_bn/moving_mean",
          "shape": [
            192
          ],
          "dtype": "float32"
        },
        {
          "name": "block6c_project_bn/moving_variance",
          "shape": [
            192
          ],
          "dtype": "float32"
        },
        {
          "name": "block6d_expand_bn/moving_mean",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6d_expand_bn/moving_variance",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6d_bn/moving_mean",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6d_bn/moving_variance",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block6d_project_bn/moving_mean",
          "shape": [
            192
          ],
          "dtype": "float32"
        },
        {
          "name": "block6d_project_bn/moving_variance",
          "shape": [
            192
          ],
          "dtype": "float32"
        },
        {
          "name": "block7a_expand_bn/moving_mean",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block7a_expand_bn/moving_variance",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block7a_bn/moving_mean",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block7a_bn/moving_variance",
          "shape": [
            1152
          ],
          "dtype": "float32"
        },
        {
          "name": "block7a_project_bn/moving_mean",
          "shape": [
            320
          ],
          "dtype": "float32"
        },
        {
          "name": "block7a_project_bn/moving_variance",
          "shape": [
            320
          ],
          "dtype": "float32"
        },
        {
          "name": "top_bn/moving_mean",
          "shape": [
            1280
          ],
          "dtype": "float32"
        },
        {
          "name": "top_bn/moving_variance",
          "shape": [
            1280
          ],
          "dtype": "float32"
        }
      ]
    }
  ]
};

export default model;