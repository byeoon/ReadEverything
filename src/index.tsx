import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React, Toasts } from 'enmity/metro/common';
import { getByProps, getByKeyword } from 'enmity/metro';
import { create } from 'enmity/patcher';
import { Text, ScrollView, TouchableOpacity, FormRow, View } from "enmity/components";
import manifest from '../manifest.json';
import findInReactTree from 'enmity/utilities/findInReactTree';
import {getIDByName} from "enmity/api/assets";

const LazyActionSheet = getByProps("openLazy", "hideActionSheet");
const Component = getByKeyword("unreadMentionsIndicatorTop")
const Patcher = create('ReadEverything');
const ReadEverything: Plugin = {
   ...manifest,

   onStart() {
      Patcher.after(Component, "default", (_, [args, res]) => {
         console.log("did we get it?" + Component);
         res.props.children ??= [];
         // "Push our child (LOL)."
         res.props.children.push(<View>Test</View>);
      });
   },

   onStop() {
      Patcher.unpatchAll();
   }
};
registerPlugin(ReadEverything);
