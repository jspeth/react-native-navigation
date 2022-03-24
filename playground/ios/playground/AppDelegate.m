#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>

#import "RNNCustomViewController.h"
#import <ReactNativeNavigation/ReactNativeNavigation.h>

#import "MyRootViewController.h"
#import "ReactNativeNavigation+BootstrapWindow.h"
#import "ReactNativeNavigationWindow.h"

@interface AppDelegate () <RCTBridgeDelegate>
@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application
    didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    if (@available(iOS 13.0, *)) {
        self.window.backgroundColor = [UIColor systemBackgroundColor];
    } else {
        self.window.backgroundColor = [UIColor whiteColor];
    }
    self.window.rootViewController = [[MyRootViewController alloc] init];
    [self.window makeKeyAndVisible];

    RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
    // [ReactNativeNavigation bootstrapWithBridge:bridge];
    [ReactNativeNavigation
        registerExternalComponent:@"RNNCustomComponent"
                         callback:^UIViewController *(NSDictionary *props, RCTBridge *bridge) {
                           return [[RNNCustomViewController alloc] initWithProps:props];
                         }];

    return YES;
}

#pragma mark - RCTBridgeDelegate

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge {
#if DEBUG
    return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"
                                                          fallbackResource:nil];
#else
    return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

- (NSArray<id<RCTBridgeModule>> *)extraModulesForBridge:(RCTBridge *)bridge {
    [ReactNativeNavigation bootstrapWithBridge:bridge window:[ReactNativeNavigationWindow shared]];
    return [ReactNativeNavigation extraModulesForBridge:bridge];
}

@end
