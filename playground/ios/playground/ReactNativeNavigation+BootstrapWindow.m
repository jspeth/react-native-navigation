//
//  ReactNativeNavigation+BootstrapWindow.m
//
//  Created by Jim Speth on 3/23/22.
//

#import "ReactNativeNavigation+BootstrapWindow.h"
#import <ReactNativeNavigation/RNNBridgeManager.h>

@interface ReactNativeNavigation (ReactNativeNavigationSecrets)
+ (instancetype)sharedInstance;
@property(nonatomic, strong) RNNBridgeManager *bridgeManager;
@end

@implementation ReactNativeNavigation (BootstrapWindow)

+ (void)bootstrapWithBridge:(RCTBridge *)bridge window:(UIWindow *)window
{
    ReactNativeNavigation *navigation = [ReactNativeNavigation sharedInstance];
    navigation.bridgeManager = [[RNNBridgeManager alloc] initWithBridge:bridge mainWindow:window];
}

@end
