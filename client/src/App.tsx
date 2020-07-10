
import React from 'react';
import './App.css';
import {StyleService} from "./services/StyleService";
// import {RulesManagementView} from "./components/RulesManagementView";
import {IToaster, IToastProps, Toaster} from "@blueprintjs/core";
import {Optional} from "@core/Globals";
// import {DeviceCommandsView} from "./components/DeviceCommandsView";

export class App extends React.Component<{},{}> {

    private toaster: Optional<IToaster>;

    render() {
        return (
            <div className={stylesheet.outerDiv}>
                {/*<RulesManagementView showToast={this.showToast}/>*/}
                {/*<DeviceCommandsView showToast={this.showToast}/>*/}
                <Toaster position={'bottom'}
                         className={stylesheet.toaster}
                         ref={(toaster) => this.toaster = toaster}
                         usePortal={false}/>
            </div>
        );
    }

    showToast(toastProps: IToastProps) {
        if (!this.toaster) {
            return;
        }
        return this.toaster.show(toastProps);
    }
}

class Stylesheet {
    outerDiv = {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex'
    };

    toaster = {
        zIndex: '10000 !important'
    };
}

let stylesheet = StyleService.instance.createStyleSheet(new Stylesheet());