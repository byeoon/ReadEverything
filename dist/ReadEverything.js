function d(e){window.enmity.plugins.registerPlugin(e)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const r=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function s(...e){return window.enmity.modules.getByProps(...e)}function w(...e){return window.enmity.modules.getByKeyword(...e)}window.enmity.modules.common;function c(e){return window.enmity.patcher.create(e)}const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList,o.Image,o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl,o.ScrollView,o.SectionList,o.StatusBar,o.StyleSheet,o.Switch,o.Text,o.TextInput,o.TouchableHighlight,o.TouchableOpacity,o.TouchableWithoutFeedback,o.Touchable;const l=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio,o.FormRow,o.FormSection,o.FormSelect,o.FormSubLabel,o.FormSwitch,o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;var a="ReadEverything",u="1.0.0",y="Mark all messages and servers as read with one button.",h=[{name:"byeoon",id:"1167275288036655133"}],g="#00007d",p="https://github.com/byeoon/ReadEverything",F={name:a,version:u,description:y,authors:h,color:g,sourceUrl:p};const S=s("openLazy","hideActionSheet"),t=w("unreadMentionsIndicatorTop"),n=c("ReadEverything"),v={...F,onStart(){const e=n.before(S,"openLazy",(T,[b,C])=>{e(),n.after(t,"default",(L,[f,m])=>{var i;console.log("did we get it?"+t),(i=m.props).children!=null||(i.children=[]),m.props.children.push(r.createElement(l,null,"Test"))})})},onStop(){n.unpatchAll()}};d(v);
