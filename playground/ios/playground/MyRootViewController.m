#import "MyRootViewController.h"
#import "ReactNativeNavigationWindow.h"

@implementation MyRootViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
    [self setup];
}

- (void)setup
{
    self.view.backgroundColor = UIColor.whiteColor;

    UIButton *windowButton = [[UIButton alloc] initWithFrame:CGRectMake(self.view.center.x - 100, 370, 200, 50)];
    windowButton.backgroundColor = UIColor.systemBlueColor;
    [windowButton setTitle:@"Present Window" forState:UIControlStateNormal];
    [windowButton addTarget:self action:@selector(presentWindow) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:windowButton];

    UIButton *vcButton = [[UIButton alloc] initWithFrame:CGRectMake(self.view.center.x - 130, 370 + 50 + 22, 260, 50)];
    vcButton.backgroundColor = UIColor.systemBlueColor;
    [vcButton setTitle:@"Present View Controller" forState:UIControlStateNormal];
    [vcButton addTarget:self action:@selector(presentViewController) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:vcButton];
}

- (void)presentWindow
{
    [[ReactNativeNavigationWindow shared] presentAnimated:YES];
}

- (void)presentViewController
{
    UIViewController *viewController = [ReactNativeNavigationWindow shared].rootViewController;
    viewController.modalPresentationStyle = UIModalPresentationFullScreen;
    [self presentViewController:viewController animated:YES completion:nil];
}

@end
